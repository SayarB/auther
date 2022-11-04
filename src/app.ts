import express, { Express } from 'express'
import cors from 'cors'
import userRoutes from './routes/user'
import dotenv from 'dotenv'
dotenv.config()
// declaring important variables
const app: Express = express()

const PORT: string | number = process.env.PORT || 8000
//setting up middlewares
app.use(cors())
// setting up api routes
app.use('/users', userRoutes)
app.use('/')
// starting the server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
