const { verifyToken } = require("../helpers/jwt");
const tokenBlacklist = new Set();

const authentication = (req, res, next) => {
  const access_token = req.headers.authorization;

  if (access_token) {
    try {
      if (tokenBlacklist.has(access_token)) {
        res.status(401).json({
          message: "Unauthorized token!",
        });
      } else {
        const token = access_token.slice(7);
        let tokenUser = verifyToken(token);
        req.userData = tokenUser;
        next();
      }
    } catch (e) {
      res.status(401).json({
        message: "Unauthorized token!",
      });
    }
  } else {
    req.userData = { id: null };
    next();
  }
};

module.exports = {
  authentication,
};
