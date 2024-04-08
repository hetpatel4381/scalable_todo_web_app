import mongoose from "mongoose";
import { config } from "../config/config";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${config.mongo_uri}`);

    console.log(
      `\nMongoDb Connected !! DB Host: ${connectionInstance.connection.host}/${connectionInstance.connection.port}:${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log("MongoDB connection Failed !", error);
    console.log(config.port);
    console.log(config.mongo_uri);

    process.exit(1);
  }
};

export default connectDB;
