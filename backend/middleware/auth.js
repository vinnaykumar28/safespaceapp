const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const authHeader = req.header("Authorization")
    
    if (authHeader) {
      const Authorization = authHeader.split(" ")[1];
  
      const stuff = jwt.verify(Authorization, "JWT_SECRET", (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        //res.status(200).send(user);
        req.user = user;
        console.log(user.id);
        next();
      });
      
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  }

  module.exports = auth;