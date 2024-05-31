import mongoose from "mongoose";

const myHouseSchema = new mongoose.Schema({
  name: String,
});

const MyHouse = mongoose.model("MyHouse", myHouseSchema);

export { MyHouse };
