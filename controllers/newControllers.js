function postMessage(req, res) {
  const messages = req.body;

  messages.push({ user: userName, text: userMessage, added: new Date() });

  res.redirect("/");
}

module.exports = postMessage;
