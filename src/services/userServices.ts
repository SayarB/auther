import { User } from './../models/User'
import { AppDataSource } from '../config/db'
import { UserData } from '../types'
const userRepository = AppDataSource.getRepository(User)

const getAllUsers = async (): Promise<User[]> => {
    const users = await userRepository.find()
    return users
}
const createUser = async({firstname, age, lastname, email, password}:UserData): Promise<User> =>{
    const user = new User()
    user.firstName = firstname
    user.age= age
    user.lastName=lastname
    user.email = email
    user.setPassword(password)
    const newUser = await user.save()
    return newUser
}

export default { getAllUsers, createUser }
