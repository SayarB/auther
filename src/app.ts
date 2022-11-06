import express, { Express } from 'express'
import cors from 'cors'
import userRoutes from './routes/user'
import dotenv from 'dotenv'
import 'reflect-metadata'
import { AppDataSource } from './config/db'
dotenv.config()
// declaring important variables
const app: Express = express()

const PORT: string | number = process.env.PORT || 8000
//setting up datasource

AppDataSource.initialize()
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => console.log(err))
//setting up middlewares
app.use(cors())
// setting up api routes
app.use('/users', userRoutes)
// starting the server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
