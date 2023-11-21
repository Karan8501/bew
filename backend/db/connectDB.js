const mongoose = require("mongoose");
require("dotenv").config();
function connectDB() {
  mongoose.set("strictQuery", false);
  console.log(process.env.DB_LINK);
  mongoose
    .connect(process.env.DB_LINK)
    .then(function () {
      console.log("DB_connected");
    })
    .catch(function (err) {
      console.log("error", err);
    });
}

module.exports = connectDB;
