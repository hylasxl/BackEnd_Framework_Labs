import postModel from "../models/post.model";
import userModel, { IUser } from "../models/user.model";

const createUserService = async (userData: IUser) => {
    try {
        const insertedData = await userModel.insertMany(userData)
        return insertedData
    } catch (err) {
        return err
    }
}
const fetchAllService = async () => {
    try {
        const userData = await userModel.find().exec()
        return userData
    } catch (err) {
        return err
    }
}

const deleteUserService = async (userId: string) => {
    try {
        return await userModel.deleteOne({ _id: userId }).exec().then(async () => {
            return await postModel.deleteMany({ userId: userId })
        })
    } catch (err) {
        return err
    }
}

const updateUserService = async (data: any) => {
    try {
        const isUserFound = await userModel.findOne({ _id: data?.userId }).exec()
        if (isUserFound) {
            console.log(isUserFound);
            const newData = {
                username: data.username || isUserFound.username,
                password: data.password || isUserFound.password,
                email: data.email || isUserFound.password
            }
            return await userModel.updateOne({
                _id: data.userId
            }, {
                $set: newData
            })
        } else {
            return "User not found"
        }
    } catch (err) {
        return err
    }
}

export { createUserService, fetchAllService, deleteUserService, updateUserService }