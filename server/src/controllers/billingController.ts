import { RequestHandler } from "express";
import { Billing } from "../models/billing";

export const postBilling: RequestHandler = async (req, res) => {

  const billing = req.body as Billing;

  res.json({ billing: billing });
};
