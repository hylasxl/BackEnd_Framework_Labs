import { Request, Response } from "express";
import { createUserService, deleteUserService, fetchAllService, updateUserService } from "../services/userService";
const createUser = async (req: Request, res: Response) => {
    try {
        const returnedData = await createUserService(req?.body)
        res.status(200).json(returnedData)
    } catch (err) {
        res.status(400).json(err)
    }
}

const fetchAllUser = async (req:Request, res: Response)=>{
    try{
        const returnedData  = await fetchAllService()
        res.status(200).json(returnedData)
    } catch (err){
        res.status(400).json(err)
    }
}
const deleteUser = async (req:Request, res: Response)=>{
    try{
        const returnedData  = await deleteUserService(req.body?.userId)
        res.status(200).json(returnedData)
    } catch (err){
        res.status(400).json(err)
    }
}
const updateUser = async (req:Request, res: Response)=>{
    try{
        const returnedData  = await updateUserService(req.body)
        res.status(200).json(returnedData)
    } catch (err){
        res.status(400).json(err)
    }
}



export {createUser, fetchAllUser, deleteUser, updateUser}