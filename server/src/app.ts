import dotEnv from "dotenv";
dotEnv.config();
import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes

export default app;
