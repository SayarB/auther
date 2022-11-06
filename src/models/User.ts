import { pbkdf2Sync, randomBytes } from 'crypto'
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
      id!: number

  @Column()
      firstName!: string

  @Column()
      lastName!: string

  @Column()
      age?: number
  
  @Column({unique:true})
      email!: string
  @Column()
      password!: string
  @Column()
      salt!: string

  setPassword(password:string){
      this.salt = randomBytes(16).toString('hex')
      this.password = pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
  }

  validatePassword(password:string){
      const hash = pbkdf2Sync(password, this.salt,1000,64,'sha512').toString('hex')
      return this.password === hash
  }
}
