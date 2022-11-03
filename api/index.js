const express = require("express");
const app = express();
const connectBD = require("./config/connectDB");
const dotenv = require("dotenv");
const sinUp = require("./Routes/Auth/signUp");
const login = require("./Routes/Auth/login");
const userRout = require("./Routes/users/usersRout");
const postRoute = require("./Routes/postRouts");
dotenv.config();

app.use(express.json());

//Routes
// user Routes
app.use("/singup", sinUp);
app.use("/login", login);
app.use("/user", userRout);
// post routes
app.use("/posts", postRoute);

//Routes
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run is success ${PORT}`);
  connectBD();
});
