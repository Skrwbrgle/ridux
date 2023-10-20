const userRoute = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const { UserController } = require("../controllers");

userRoute.get("/", authentication, UserController.getUser);
userRoute.post("/login", UserController.login);
userRoute.post("/register", UserController.register);
userRoute.put("/update", authentication, UserController.update);
userRoute.delete("/delete", authentication, UserController.delete);

module.exports = userRoute;
