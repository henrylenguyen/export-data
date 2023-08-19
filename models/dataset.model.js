// Using Node.js `require()`
import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

// Khung suờn của data, để ràng buộc dữ liệu
const datasetSchema = new Schema(
  {
    componentName: String,
    accountNumber: Number,
    class: String,
    journalEntryType: String,
    accountName: String,
    journalNumber: Number,
    journalEffectiveDate: Number,
    journalPostingDate: String,
    journalHeaderDescription: String,
    journalLineDescription: String,
    transactionType: String,
    userIDEntered: String,
    userNameEntered: String,
    isStandard: Boolean,
    transactionCurrency: String,
    transactionCurrencyAmount: Number,
    reportingCurrencyAmount: Number,
    reportingPeriod: String,

  },
  {
    collection: "exportDataset",
  }
);

// tên + schema

const datasetModel = model("dataset", datasetSchema);

export default datasetModel;