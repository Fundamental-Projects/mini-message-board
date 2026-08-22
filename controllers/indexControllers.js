const messages = require("../data/messages");

function getIndex(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

function getIndexById(req, res) {
  const { messageId } = req.params;
  const numericMessageId = Number(messageId);

  const foundMessage = messages.find((message, i) => i === numericMessageId);

  if (!foundMessage) {
    return res.status(404).send("Invalid Id");
  }

  res.render("/details", {
    message: foundMessage,
  });
}

module.exports = { getIndex, getIndexById };
