import { Schema, Document, model } from "mongoose";
import { IUser } from "./user.model";

export interface IPost extends Document {
    userId: IUser['_id'],
    content: string
}

const PostSchema: Schema<IPost> = new Schema<IPost>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users', // Assuming the users collection is named 'users'
            required: true
        },
        content: {
            type: String,
            required: true,
            minlength: [1, "Content cannot be empty"] // Set minimum length to 1
        }
    },
    {
        timestamps: true
    }
)

export default model<IPost>('posts', PostSchema);
