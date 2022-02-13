import express from "express";
import cors from "cors";
import asyncHandler from "express-async-handler";
import bodyParser from "body-parser";
import httpErrors from "http-errors";
import helmet from "helmet";
import { geoLocationRoutes } from "./routes/geoLocation/geoLocation";
import { isBodyValid } from "./common";
import { initializeMaxMindGeoIP } from "./environment";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "test") {
  initializeMaxMindGeoIP();
}

app.use(
  "/",
  asyncHandler(async (req, res, next) => {
    if (!isBodyValid) {
      return next(httpErrors(400, "Invalid request body."));
    }
    next();
  })
);

app.use("/geoLocation", geoLocationRoutes);

export default app;
