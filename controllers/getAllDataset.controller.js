import datasetModel from "../models/dataset.model.js";

export const getAllDataset = async (req, res, next) => {
  try {
    const data = await datasetModel.find({}, { __v:0})
    res.status(200).json({
      message: "Lấy dữ liệu thành công",
      statusCode: 200,
      data: data
    });
  } catch (err) {
    res.status(500).json({ error: 'Có lỗi xảy ra' });
  }
};