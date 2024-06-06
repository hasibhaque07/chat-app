// get login page
const getLogin = (req, res, next) => {
  //   res.render("index", {
  //     title: "Login - Chat Application",
  //   });
  res.render("index");
};

module.exports = {
  getLogin,
};
