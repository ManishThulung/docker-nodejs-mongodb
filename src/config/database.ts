import mongoose from "mongoose";

let DB_USER = process.env.MONGO_DB_USER;
let DB_PASS = process.env.MONGO_DB_PASSWORD;

let DB_URI = `mongodb://${DB_USER}:${DB_PASS}@mongodb`;
export const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_URI ?? "");
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
