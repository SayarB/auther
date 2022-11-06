import { User } from './../models/User'
import { AppDataSource } from '../config/db'
const userRepository = AppDataSource.getRepository(User)


const getAllUsers = async (): Promise<User[]> => {
    const users = await userRepository.find()
    return users
}

export default { getAllUsers }
