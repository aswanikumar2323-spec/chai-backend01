import "dotenv/config";

import app from "./app.js";

import connectDB from "./db/db.js";


connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!! ", error);
  });
