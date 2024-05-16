const router = require("express").Router();
const { Category, Product, ProductTag } = require("../../models");

// The `/api/categories` endpoint

// Find all categories:
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Add a category:
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    console.log("New category succesfully created.");
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update a category:
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    console.log("Category successfully updated.");
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a category by id:
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      return res.json({ message: "No category found with that id!" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);

    return;
  }
});

// Find a category by id:
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
