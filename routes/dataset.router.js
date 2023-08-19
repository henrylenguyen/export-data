import { Router } from "express";
import addDatasetController from "../controllers/addDataset.controller.js";
import { getAllDataset } from "../controllers/getAllDataSet.controller.js";
const datasetRouter = Router();
// Lấy dữ liệu từ db
datasetRouter.post("/add-dataset",addDatasetController);
datasetRouter.get("/get-all-dataset", getAllDataset)
export default datasetRouter;