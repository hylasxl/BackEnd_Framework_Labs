import express from "express"
import { Express } from "express"
import { createUser, fetchAllUser, deleteUser, updateUser } from "../controllers/user.controller"
const router = express.Router()

const initUserRoute = (app: Express) => {
    router.post('/create', createUser)
    router.get('/fetch-all', fetchAllUser)
    router.patch('/update', updateUser)
    router.delete('/delete',deleteUser)
    return app.use('/users/', router)
}

export default initUserRoute