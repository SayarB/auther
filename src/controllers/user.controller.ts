import { Request, Response } from 'express'
const getUsers = (req: Request, res: Response) => {
    return res.json([{ name: 'sayar' }, { name: 'aman' }])
}

export default { getUsers }
