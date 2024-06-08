import express, { Express } from "express";
import { configDotenv } from "dotenv";
import { connectDatabase } from "./configs/db.config";
import initPostRoute from "./routers/post.route";
configDotenv();

const defaultPORT = 5000;
const app: Express = express();
const PORT = process.env.PORT || defaultPORT;

app.use(express.json());

connectDatabase();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

initPostRoute(app)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
