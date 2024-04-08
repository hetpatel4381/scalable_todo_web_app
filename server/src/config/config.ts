import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

export const config = {
  port: `${process.env.PORT}`,
  mongo_uri: `${process.env.MONGO_URI}`,
};
