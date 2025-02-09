import dotenv from "dotenv";
import { connectDatabase } from "./config/database";
import app from "./app";

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}

// Connecting to database
connectDatabase();

const server = app.listen(6000, () => {
  console.log(`Server is working on http://localhost:${6000}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (error: any) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
