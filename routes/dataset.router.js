import { Router } from "express";
import getAllDataset from './../controllers/getAllDataset.controller.js';
import addDatasetController from './../controllers/addDataset.controller.js';
const datasetRouter = Router();
// Lấy dữ liệu từ db
datasetRouter.post("/add-dataset",addDatasetController);
datasetRouter.get("/get-all-dataset", getAllDataset)
export default datasetRouter;