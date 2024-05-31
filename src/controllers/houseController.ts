import { NextFunction, Request, Response } from "express";
import { MyHouse } from "../models/houseModel";
import ErrorHandler from "../utils/ErrorHandler";

export const createHouse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const house = new MyHouse(req.body);
  console.log(req.body);

  try {
    const house = await MyHouse.create({
      name: req.body.name,
    });
    res
      .status(200)
      .json({ success: true, message: "create successful", data: house });
  } catch (error) {
    next(error);
  }
};

export const getHouses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const house = await MyHouse.find();
    if (!house) {
      next(new ErrorHandler(404, "No data available"));
    }
    res.status(200).json({
      success: true,
      message: "data successfully coming",
      data: house,
    });
  } catch (error) {
    next(error);
  }
};
