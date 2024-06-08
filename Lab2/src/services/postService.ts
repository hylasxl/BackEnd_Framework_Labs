import postModel from "../models/post.model";
import userModel from "../models/user.model";

const createPostService = async (data: any) => {
    const isUserFound = await userModel.find({ _id: data?.userId }).exec()
    if (isUserFound) {
        return await postModel.insertMany({
            userId: data?.userId,
            content: data?.content
        }).catch(err => {
            return err
        })
    } else {
        return
    }
}

const fetchAllPostsService = async () => {
    return await postModel.find().populate('userId').exec().catch(err => {
        return err
    })
}

const deletePostService = async (data: any) => {
    return await postModel.deleteOne({ _id: data?.postId }).exec().catch(err => {
        return err
    })
}

const updatePostService = async (data: any) => {
    return await postModel.updateOne({ _id: data?.postId }, {
        $set: {
            content: data?.content
        }
    })
}

export { createPostService, fetchAllPostsService, deletePostService, updatePostService }