import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
      id!: number

  @Column()
      firstName!: string

  @Column()
      lastName!: string

  @Column()
      age!: number
  @Column()
      email!: string
  @Column()
      password!: string
}
