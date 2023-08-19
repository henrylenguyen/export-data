import express from "express";
import dotenv from "dotenv";
import swaggerSetup from "./swagger/swagger.js"; // import swaggerSetup từ file swagger.js
import morgan from "morgan";
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT;
import bodyParser from "body-parser";
// import router from './routes/routes.js';
import connectToDatabase from "./models/services.modal.js";
import datasetRouter from "./routes/dataset.router.js";
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(corsMiddleware);
// CORS middleware
app.use(cors())
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//----------------------------------SERVER----------------------------------------------------------
async function startServer() {
  app.use(morgan("dev"));

  // Kết nối đến database trước khi khởi động ứng dụng
  await connectToDatabase();

  // ------------------------SỬ DỤNG ROUTES--------------------------------------
  app.use("/api/dataset", datasetRouter)
  
  // Set up Swagger middleware
  swaggerSetup(app);
  // // Khởi động ứng dụng
  app.listen(port, () => {
    console.log(
      `Server đang chạy ở cổng http://localhost:${port}, click vào để xem`
    );
  });
}

startServer();