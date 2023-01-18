const { Router } = require("express");
const { getGeneres } = require("../../controllers/getGeneres");

const genresRouter = Router();

genresRouter.get("/", async (req, res) => {
  const generes = getGeneres();
});

module.exports = genresRouter;
