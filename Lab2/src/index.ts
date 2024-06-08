import express, { Express } from "express";
import { configDotenv } from "dotenv";
import { connectDatabase } from "./configs/db.config";
import initPostRoute from "./routes/post.route";
import initUserRoute from "./routes/user.route";
configDotenv();

const defaultPORT = 5000;
const app: Express = express();
const PORT = process.env.PORT || defaultPORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();


initPostRoute(app)
initUserRoute(app)

app.listen(PORT, () => {
    console.log(`Server Is Listening On Port: ${PORT}`);
});
