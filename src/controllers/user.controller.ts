import { User } from './../models/User'
import { Request, Response } from 'express'
import userServices from '../services/userServices'
const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await userServices.getAllUsers()
    return res.json(users)
}

export default { getUsers }
