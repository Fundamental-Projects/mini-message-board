const { Router } = require("express");
const newRouter = Router();

const postMessage = require("../controllers/newControllers");

newRouter.post("/", postMessage);

module.exports = newRouter;
