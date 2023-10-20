const postRoute = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const { PostController } = require("../controllers");

postRoute.get("/", PostController.getPosts);
postRoute.post("/create", authentication, PostController.create);
postRoute.delete("/delete", authentication, PostController.delete);
postRoute.put("/update", authentication, PostController.update);
postRoute.put("/status", authentication, PostController.changeStatus);

module.exports = postRoute;
