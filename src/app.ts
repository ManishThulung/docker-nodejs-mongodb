import express, { Request, Response, Express, NextFunction } from "express";
import ErrorHandler from "./utils/ErrorHandler";
import HouseRouter from "./routes/houseRoutes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ data: "hii" });
});
app.use("/api/house", HouseRouter);

app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal server error";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
    });
  }
);

export default app;
