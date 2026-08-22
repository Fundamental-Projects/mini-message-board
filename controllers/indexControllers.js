const messages = require("../data/messages");

function getIndex(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

module.exports = getIndex;
