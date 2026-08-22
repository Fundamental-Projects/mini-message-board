const messages = require("../data/messages");

function postMessage(req, res) {
  const { user, message } = req.body;

  messages.push({ user: user, text: message, added: new Date() });

  res.redirect("/");
}

function getNew(req, res) {
  res.render("form");
}

module.exports = { postMessage, getNew };
