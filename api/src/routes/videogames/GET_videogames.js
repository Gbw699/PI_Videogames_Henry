const { Router } = require("express");
const { getVideogames } = require("../../controllers/getVideogames");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const videogames = await getVideogames();
    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
