import httpErrors from "http-errors";
import { Router } from "express";
import { UserInfo } from "../../types";
import { getMaxMindWebClient } from "./../../environment";

const router = Router();

router.get("/", async (req, res, next) => {
  const ipAddress = req.query.ipAddress as string;

  const webClient = getMaxMindWebClient();

  return webClient
    .city(ipAddress)
    .then((response) => {
      const resBody: UserInfo = {
        ipAddress: ipAddress,
        lat: response.location?.latitude,
        long: response.location?.longitude,
      };

      return res.status(200).send(resBody);
    })
    .catch((err) => {
      console.error(err);
      return next(httpErrors(500, err.message));
    });
});

export const getUserInfoWeb = router;
