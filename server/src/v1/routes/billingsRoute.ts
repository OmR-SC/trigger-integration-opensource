import { Response, Router, request } from "express";
import {postBilling} from "../../controllers/billingController";

const routes = Router();

routes.post("/billing", postBilling);

export default routes;
