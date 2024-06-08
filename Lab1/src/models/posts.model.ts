import { Schema, Document, model } from "mongoose";

interface IPost extends Document {
    
}

const PostSchema :Schema<IPost> = new Schema<IPost>(

)

export default model<IPost>('posts',PostSchema)