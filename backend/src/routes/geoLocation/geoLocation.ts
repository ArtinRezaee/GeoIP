import { Router } from "express";
import { getUserInfoDB } from "./dbService ";
import { isIPValid } from "./common/commonValidation";
import { getUserInfoWeb } from "./webService";
const router = Router();

router.use("/web", isIPValid, getUserInfoWeb);
router.use("/db", isIPValid, getUserInfoDB);

export const geoLocationRoutes = router;
