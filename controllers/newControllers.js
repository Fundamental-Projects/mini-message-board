function postMessage(req, res) {
  const messages = req.body;

  messages.push({ user: user, text: message, added: new Date() });

  res.redirect("/");
}

module.exports = postMessage;
