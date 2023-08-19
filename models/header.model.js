// Using Node.js `require()`
import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

// Khung suờn của data, để ràng buộc dữ liệu
const headerDataset = new Schema(
  {
    name: String,
    caption: String,
    order: Number
  },
  {
    collection: "headerDataset",
  }
);

// tên + schema

const headerDatasetModel = model("headerDataset", headerDataset);

export default headerDatasetModel;