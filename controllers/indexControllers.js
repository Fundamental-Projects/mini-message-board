const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getIndex(req, res) {
  res.render("index", { text: text, user: user, added: added });
}

module.exports = getIndex;
