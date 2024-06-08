import { Request, Response } from "express";
import { createPostService, fetchAllPostsService, updatePostService, deletePostService } from "../services/postService"

const createPost = async (req: Request, res: Response) => {
    try {
        const returnedData = await createPostService(req?.body)
        res.status(200).json(returnedData)
    } catch (err) {
        res.status(400).json(err)
    }
}

const updatePost = async (req: Request, res: Response) => {
    try {
        const returnedData = await updatePostService(req?.body)
        res.status(200).json(returnedData)
    } catch (err) {
        res.status(400).json(err)
    }
}

const deletePost = async (req: Request, res: Response) => {
    try {
        const returnedData = await deletePostService(req?.body)
        res.status(200).json(returnedData)
    } catch (err) {
        res.status(400).json(err)
    }
}

const fetchAllPosts = async (req: Request, res: Response) => {
    try {
        const returnedData = await fetchAllPostsService()
        res.status(200).json(returnedData)
    } catch (err) {
        res.status(400).json(err)
    }
}

export {createPost, updatePost, fetchAllPosts, deletePost}