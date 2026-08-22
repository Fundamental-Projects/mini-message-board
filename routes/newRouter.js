const { Router } = require("express");
const newRouter = Router();

const { getNew, postMessage } = require("../controllers/newControllers");

newRouter.get("/", getNew);
newRouter.post("/", postMessage);

module.exports = newRouter;
