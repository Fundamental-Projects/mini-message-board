const { Router } = require("express");
const indexRouter = Router();

const { getIndexById, getIndex } = require("../controllers/indexControllers");

indexRouter.get("/", getIndex);
indexRouter.get("/details/:messageId", getIndexById);

module.exports = indexRouter;
