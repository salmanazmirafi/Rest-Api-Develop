const {
  catagorys,
  getallcategory,
} = require("../controlar/catagory/catagoryCon");

const catagoryRout = require("express").Router();

catagoryRout.post("/", catagorys);
catagoryRout.get("/all", getallcategory);

module.exports = catagoryRout;
