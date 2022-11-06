import { DataSource } from 'typeorm'
import { URL } from 'url'
import dotenv from 'dotenv'
import { User } from '../models/User'
dotenv.config()
const dbUrl = new URL(process.env.DATABASE_URL!)
const routingId = dbUrl.searchParams.get('options')
dbUrl.searchParams.delete('options')

console.log(process.env.DATABASE_URL)

export const AppDataSource = new DataSource({
    type: 'cockroachdb',
    url: dbUrl.toString(),
    ssl: true,
  
    entities: [User],
    extra: {
        options: routingId,
    },
    migrationsTableName: 'migrations',
    migrations: [
        './src/migrations/**/*.ts'
    ],
    synchronize:false

})
