"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHouses = exports.createHouse = void 0;
const houseModel_1 = require("../models/houseModel");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
// create
const createHouse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const house = new houseModel_1.MyHouse(req.body);
    console.log(req.body);
    try {
        const house = yield houseModel_1.MyHouse.create({
            name: req.body.name,
        });
        res
            .status(200)
            .json({ success: true, message: "create successful", data: house });
    }
    catch (error) {
        next(error);
    }
});
exports.createHouse = createHouse;
const getHouses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const house = yield houseModel_1.MyHouse.find();
        if (!house) {
            next(new ErrorHandler_1.default(404, "No data available"));
        }
        res.status(200).json({
            success: true,
            message: "data successfully coming",
            data: house,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getHouses = getHouses;
//# sourceMappingURL=houseController.js.map