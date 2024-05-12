const router = require("express").Router();
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const tagRoutes = require("./tagRoutes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
