const jwt = require("jsonwebtoken");
let constant = require("../configjw/constants");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
 let secret = constant.jwtSecret;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // can't pass
        res.status(401).json({ error: "Access Denied" });
      } else {
        // go next
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};