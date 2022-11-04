const Catagory = require("../../modules/catagory");
// create category
exports.catagorys = async (req, res, next) => {
  const { name } = req.body;
  try {
    const catagory = await Catagory.create({
      name,
    });
    res.status(201).json(catagory);
  } catch (error) {
    res.status(401).json({
      message: "Somthing went worng",
    });
  }
};
// get all category
exports.getallcategory = async (req, res, next) => {
  try {
    const getcata = await Catagory.find();
    res.status(200).json(getcata);
  } catch (error) {
    res.status(401).json({
      message: "Undifind",
    });
  }
};
// get all category
// get all category
// get all category
// get all category
