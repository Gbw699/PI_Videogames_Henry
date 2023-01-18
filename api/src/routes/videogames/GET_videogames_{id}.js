const { Router } = require("express");
const { getVideogameById } = require("../../controllers/getVideogameById");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await getVideogameById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
