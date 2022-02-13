type EnvironmentType = "development" | "production";

export const ENVIRONMENT: EnvironmentType = (
  process.env.NODE_ENV as string
).trim() as EnvironmentType;

export const MAXMIND_ACCOUNT_ID: string = (
  process.env.MAXMIND_ACCOUNT_ID ?? ""
).trim();

export const MAXMIND_LICENSE: string = (
  process.env.MAXMIND_LICENSE ?? ""
).trim();
