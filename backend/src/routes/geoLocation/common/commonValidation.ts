import httpErrors from "http-errors";
import { RequestHandler } from "express";
import validator from "validator";

export const isIPValid: RequestHandler = (req, res, next) => {
  const ipAddress = req.query.ipAddress as string;

  if (!validator.isIP(ipAddress)) {
    return next(httpErrors(400, "Invalid IP Address."));
  }
  next();
};
