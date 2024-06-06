// get inbox page
const getInbox = (req, res, next) => {
  //   res.render("inbox", {
  //     title: "Inbox - Chat Application",
  //   });
  res.render("inbox");
};

module.exports = {
  getInbox,
};
