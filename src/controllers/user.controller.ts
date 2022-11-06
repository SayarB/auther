import { UserData } from './../types/index.d'
import { User } from './../models/User'
import { Request, Response } from 'express'
import userServices from '../services/userServices'
const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await userServices.getAllUsers()
    return res.json(users)
}
const postUser = async (req:Request, res:Response)=>{
    const userData: UserData = {
        age: 0,
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }
    if(!req.body.firstname || !req.body.lastname || !req.body.age || !req.body.email || !req.body.password){
        return res.status(400).json({message: 'missing_details'})
    }
    userData.firstname = req.body.firstname
    userData.lastname = req.body.lastname
    userData.age = req.body.age
    userData.email = req.body.email
    userData.password = req.body.password
    const user = await userServices.createUser(userData)
    return res.status(200).json({...user})

}   
export default { getUsers, postUser }
