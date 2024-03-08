import dotEnv from "dotenv";
dotEnv.config();
import express from "express";
import cors from "cors";
import billingRoutes from './v1/routes/billingsRoute'

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes

app.use(billingRoutes);


export default app;
