const express = require("express");
const app = express();
const connectBD = require("./config/connectDB");
const dotenv = require("dotenv");
const sinUp = require("./Routes/Auth/signUp");
const login = require("./Routes/Auth/login");
dotenv.config();

app.use(express.json());

//Routes

app.use("/singup", sinUp);
app.use("/login", login);

//Routes
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run is success ${PORT}`);
  connectBD();
});
