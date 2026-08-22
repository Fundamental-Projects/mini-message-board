const messages = require("../data/messages");

function postMessage(req, res) {
  const newMessages = req.body;
  const { user, message } = newMessages;
  console.log(user);
  console.log(message);

  messages.push({ user: user, text: message, added: new Date() });

  res.redirect("/");
}

module.exports = postMessage;
