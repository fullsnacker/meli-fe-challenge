const middlewareAuthor = (req, res, next) => {
  res.author = {
    name: "Juan",
    lastname: "Garcia",
  };
  next();
};

module.exports = middlewareAuthor;
