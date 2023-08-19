import { Router } from "express";
import getAllDataset from './../controllers/getAllDataset.controller.js';
import addDatasetController from './../controllers/addDataset.controller.js';
import { getDatasetByPage } from './../controllers/getByPage.controller.js';
const datasetRouter = Router();
// Lấy dữ liệu từ db
datasetRouter.post("/add-dataset",addDatasetController);
datasetRouter.get("/get-all-dataset", getAllDataset)
datasetRouter.get("/get-by-page", getDatasetByPage)
export default datasetRouter;