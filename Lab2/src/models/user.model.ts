import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
}

const UserSchema: Schema<IUser> = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true, // Ensure username is unique
            trim: true // Remove whitespace from both ends of a string
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true, // Ensure email is unique
            validate: {
                validator: function (v: string) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: (props: { value: string }) => `${props.value} is not a valid email address!`
            }
        }
    },
    {
        timestamps: true
    }
);

export default model<IUser>('users', UserSchema);
