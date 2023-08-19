
import datasetModel from './../models/dataset.model.js';
import headerDatasetModel from './../models/header.model.js';
//Phân trang data set
export const getDatasetByPage = async (req, res, next) => {
  let page = req.query.pageNumber; // số trang đang lấy
  let PAGE_SIZE = req.query.recordNumber; // số phần tử cần lấy

  if (page) {
    // Lấy theo phân trang
    if (page < 1) {
      page = 1;
    }

    page = parseInt(page);
    let soLuongBoQua = (page - 1) * PAGE_SIZE;
    try {
      const total = await datasetModel.countDocuments({});
      if (soLuongBoQua >= total) {
        return res.json({
          content: {
            totalPages: Math.ceil(total / PAGE_SIZE), // Tổng số trang 
            pageIndex: page, // trang hiện tại
            totalRecords: total, // Tổng số lượng phần tử có trong data
            recordIndex: 0, // Số lượng phần tử đang hiển thị
            data: [], 
          },
          
        });
      }
      let soLuongPhanTuHienTai = PAGE_SIZE;
      if (PAGE_SIZE > total) {
        soLuongPhanTuHienTai = total;
      } else if (total - soLuongBoQua < PAGE_SIZE) {
        soLuongPhanTuHienTai = total - soLuongBoQua;
      }
      const data = await datasetModel
        .find({}, { __v: 0 })
        .skip(soLuongBoQua)
        .limit(PAGE_SIZE);
      let tongSoTrang = Math.ceil(total / PAGE_SIZE);
      const header = await headerDatasetModel.find({}, { __v: 0, _id: 0 })
      if (page > tongSoTrang) {
        return res.json({
          content: {
            totalPages: tongSoTrang,
            pageIndex: page,
            totalRecords: total,
            recordIndex: 0,
            data: [],
          },
        });
      }
      res.status(200).json({
        message: "Lấy dữ liệu thành công",
        statusCode: 200,
        data: {
          totalPages: tongSoTrang,
          pageIndex: page,
          totalRecords: total,
          recordIndex: parseInt(soLuongPhanTuHienTai),
          headercolumns: header,
          dataTable: data
        },
      });
    } catch (err) {
      res.json("Lỗi");
    }
  } else {
    res.status(400).json("Phải có số trang và số phần tử trên trang");
  }
};