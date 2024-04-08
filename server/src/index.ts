// Import required modules
import app from "./app";
import connectDB from "./db/index";
import { config } from "./config/config";

// Connect to the database
connectDB()
  .then(() => {
    // Start the server
    app.listen(config.port || 4000, () => {
      console.log(`Server started at port ${config.port}`);
    });
  })
  .catch((e) => {
    console.error("MongoDB Connection Failed !");

    console.error(e);
  });
