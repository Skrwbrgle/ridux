const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page",
  });
});

const userRoutes = require("./users");
const postRoutes = require("./posts");

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);

module.exports = routes;
