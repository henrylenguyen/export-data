
import headerDatasetModel from '../models/header.model.js';
import datasetModel from './../models/dataset.model.js';
const getAllDataset = async (req, res, next) => {
  try {
    const data = await datasetModel.find({}, { __v:0})
    const header = await headerDatasetModel.find({}, { __v:0,_id:0})
    res.status(200).json({
      message: "Lấy dữ liệu thành công",
      statusCode: 200,
      data: {
        headercolumns: header,
        dataTable: data
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Có lỗi xảy ra' });
  }
};

export default getAllDataset