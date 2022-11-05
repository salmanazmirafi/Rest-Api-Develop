const express = require("express");
const app = express();
const connectBD = require("./config/connectDB");
const multer = require("multer");
const dotenv = require("dotenv");
const morgan = require("morgan");
const sinUp = require("./Routes/Auth/signUp");
const login = require("./Routes/Auth/login");
const userRout = require("./Routes/users/usersRout");
const postRoute = require("./Routes/postRouts");
const catagoryRout = require("./Routes/catagorys");

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

// file upload

const uploadStoregFile = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./image");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});
const upload = multer({ storage: uploadStoregFile });

// upload file
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Image Upload Successful😊");
});

//Routes
// user Routes
app.use("/singup", sinUp);
app.use("/login", login);
app.use("/user", userRout);
// post routes
app.use("/posts", postRoute);
//catagorys routs
app.use("/catagorys", catagoryRout);
// upload file

//Routes
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run is success ${PORT}`);
  connectBD();
});
