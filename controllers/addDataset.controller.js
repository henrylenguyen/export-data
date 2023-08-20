
import datasetModel from './../models/dataset.model.js';
// Hàm để tạo dữ liệu ngẫu nhiên
const generateRandomData = () => {
  return {
    componentName: "componentName " + Math.floor(Math.random() * 100000),
    accountNumber: Math.floor(Math.random() * 100000),
    class: "class " + Math.floor(Math.random() * 100000),
    journalEntryType: "journalEntryType " + Math.floor(Math.random() * 100000),
    accountName: "accountName " + Math.floor(Math.random() * 100000),
    journalNumber: Math.floor(Math.random() * 100000),
    journalEffectiveDate: Math.floor(Math.random() * 100000),
    journalPostingDate: "journalPostingDate " + Math.floor(Math.random() * 100000),
    journalHeaderDescription: "journalHeaderDescription " + Math.floor(Math.random() * 100000),
    journalLineDescription: "journalLineDescription " + Math.floor(Math.random() * 100000),
    transactionType: "transactionType " + Math.floor(Math.random() * 100000),
    userIDEntered: "userIDEntered " + Math.floor(Math.random() * 100000),
    userNameEntered: "userNameEntered " + Math.floor(Math.random() * 100000),
    isStandard: Math.random() < 0.5,
    transactionCurrency: "transactionCurrency " + Math.floor(Math.random() * 100000),
    transactionCurrencyAmount: Math.floor(Math.random() * 100000),
    reportingCurrencyAmount: Math.floor(Math.random() * 100000),
    reportingPeriod: "reportingPeriod " + Math.floor(Math.random() * 100000),
  };
};

// Controller để thêm dữ liệu
const addDatasetController = async (req, res) => {
  try {
    const {count} = req.body; // Lấy giá trị số lượng từ request body
    console.log("file: dataset.controller.js:32 ~ count:", count)

    // Kiểm tra xem count có tồn tại và là một số nguyên không âm
    if (!Number.isInteger(count) || count < 0) {
      return res.status(400).json({
        message: "Giá trị không hợp lệ",
        statusCode: 400});
    } else {
      const newData = [];
      for (let i = 0; i < count; i++) {
        newData.push(generateRandomData());
      }
      console.log(`Chạy được tới: ${newData.length}`)
      const result = await datasetModel.insertMany(newData);

      res.status(201).json({
        message: "Thêm mới dữ liệu thành công",
        statusCode: 201,
        total: `Tổng dữ liệu thêm mới là: ${newData.length}`,
        data: result
      });
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Có lỗi xảy ra' });
  }
};

export default addDatasetController;