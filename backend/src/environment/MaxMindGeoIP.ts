import { WebServiceClient } from "@maxmind/geoip2-node";
import { MAXMIND_ACCOUNT_ID, MAXMIND_LICENSE } from "./Environment";

let maxMindGeoIPClinet: WebServiceClient;

export const initializeMaxMindGeoIP = (): void => {
  maxMindGeoIPClinet = new WebServiceClient(
    MAXMIND_ACCOUNT_ID,
    MAXMIND_LICENSE,
    { host: "geolite.info" }
  );
};

export const getMaxMindWebClient = (): WebServiceClient => {
  return maxMindGeoIPClinet;
};
