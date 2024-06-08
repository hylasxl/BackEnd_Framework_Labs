import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()



export const connectDatabase = async () => {
    let MONGOOSE_URI = ""
    if(process.env.NODE_ENV === "development"){
        console.log("Development Environment");
        MONGOOSE_URI = String(process.env.MONGO_CONNECTION_STRING_DEV)
    } else if(process.env.NODE_ENV === "production"){
        console.log("Production Environment");
        MONGOOSE_URI = String(process.env.MONGO_CONNECTION_STRING_PRODUCTION)
    }
    await mongoose.connect(MONGOOSE_URI)
        .then(() => {
            console.log("Database connect successfully")
        })
        .catch((err) => {
            console.error('Database connection error:', err);
        })
}

