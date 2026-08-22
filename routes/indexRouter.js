const { Router } = require("express");
const indexRouter = Router();

const getIndex = require("../controllers/indexControllers");

indexRouter.get("/", getIndex);
