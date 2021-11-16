const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require('../model/User');




router.get('/all', async (req,res) => {
    try {
        //console.log("getting all users")
        const allusers = await user.find();
        res.json(allusers);
    } catch (err) {
        res.json(err);
    }
});
router.get('/:userId', async (req, res) => {
    try{
    const findUser = await user.findById(req.params.userId);
    res.json(findUser);
    } catch (err) {
        res.json(err);
    }
});
router.delete('/delete/:userID', async (req,res) => {
    try{
        const dUser = await user.remove({
            _id: req.params.userID
        })
        if(dUser){
            res.json(dUser);
        }
        else[
            res.json({
                message: nan
            })
        ]
    } catch (err) {
            res.json(err);
    }
});

router.patch('/update/:userID', async (req,res) => {
    try{
        const updateUser = await user.updateOne({
            _id: req.params.userID}, {$set: {username: req.body.username, email: req.body.email, password: req.body.password, address: req.body.address}}
        );
        res.json(updateUser);
    } catch (err) {
            res.json(err);
    }
});

router.post('/register', async (req,res) => {
//storing values passed from client side
const username = req.body.username;
const email = req.body.email;
const address = req.body.address;
const password = req.body.password;

//encrypt the password
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    res.json({
      error: err,
    });
  }

  //create new user
  var newUser = new user({ username, email, address, password: hashedPassword });

  //save the user in db
  newUser.save(function (err, user) {
    if (err) return console.error(err);
    res.status(200).json({ 
      error: 'None',
      status: "success"
     });
  });
});
});
router.post('/login', async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({ username: username }, (err, user) => {

        //if the nothing is returned then user doesn't exist
        if (user == null) {
         res.json({ 
            error: 'E404',
            status: "Unsuccessful in searching for user.",
          });
        } else {
          //if a value is returned then compare the password with the encrypted password saved in db
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              res.json({ status: "Unsuccessful in searching for user." });
            }
            //if both passwords are equal then sign the payload
            if (result) {
              let token = jwt.sign({ username: user.username }, "Secret", {
                expiresIn: "2h",
              });
              res.json({ 
                error: "None",
                status: "success", 
                userData: {
                  username: user.username,
                  email: user.email,
                  address: user.address,
                  password: user.password,
                  token
                }
              });
            }
    
            //if not equal then incorrect password
            else {
              res.json({ 
                error: "Different Passwords.",
                status: "Incorrect Password."
              });
            }
          });
        }
      })
})

module.exports = router;