import express from "express"
import { Express } from "express"
import { createPost, updatePost, deletePost, fetchAllPosts } from "../controllers/post.controller"
const router = express.Router()

const initPostRoute = (app: Express) => {
    router.post('/create', createPost)
    router.get('/fetch-all', fetchAllPosts)
    router.patch('/update', updatePost)
    router.delete('/delete', deletePost)
    return app.use('/posts/', router)
}

export default initPostRoute