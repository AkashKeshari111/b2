const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers?.token?.split(" ")[1];
 try{
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        res.send({"msg":"Please login first"})
      
      }
      if (decoded) {
        req.body.user_id = decoded.user_id;
        next();
      }
    });
  } catch(err) {
    res.status(404).send(err);
  }
};

module.exports = { authentication };



