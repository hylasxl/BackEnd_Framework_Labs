import express from "express"
import { Express } from "express"
const router = express.Router()

const initPostRoute = (app: Express) => {
    return app.use('/potst/', router)
}

export default initPostRoute