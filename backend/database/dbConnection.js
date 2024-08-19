import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://ajayanta8944:bbyOGqh9JPmGTQMY@cluster0.p0pdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};