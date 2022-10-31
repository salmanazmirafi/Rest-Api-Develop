const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.DATABSE_URL);
    console.log("Database Connect Seccess");
  } catch (error) {
    console.log("Database Connect Faill");
  }
};
module.exports = connectBD;
