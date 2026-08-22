const messages = require("../data/messages");

function postMessage(req, res) {
  const newMessages = req.body;
  const { user, message } = newMessages;
  console.log(user);
  console.log(message);

  messages.push({ user: user, text: message, added: new Date() });

  res.redirect("/");
}

function getNew(req, res) {
  res.render("form", { messages: messages });
}

module.exports = { postMessage, getNew };
