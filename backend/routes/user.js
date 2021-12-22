const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const user = require('../model/User');
const auth = require('../middleware/auth');



router.use(express.json());
router.get('/all', auth, async (req,res) => {
    try {
      if(req.user.username === 'admin'){
        let {page, size, search} = req.query;
        if(!page){
          page = 1;
        }
        if(!size){
          size = 10;
        }

        const limit =  Number(size);
        const skip = (page - 1) * size;
        const allusers = await user.find().limit(limit).skip(skip);
        res.json(allusers);
      }
      else{
        res.json({
          'error' : 'forbidden'
        })
      }
    } catch (err) {
        res.json(err);
    }
});
router.get('/:userId', auth, async (req, res) => {
    try{
    if(req.user.id === req.params.userId || req.user.username === 'admin'){

    
    const findUser = await user.findById(req.params.userId);
    res.json(findUser);
    }
    else{
      res.json({
        'error': 'forbidden'
      })
    }
    } catch (err) {
        res.json(err);
    }
});
router.delete('/delete/:userID',auth, async (req,res) => {
    try{
      if(req.user.username === 'admin'){
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
      }
      else{
        res.json({
          'error': 'forbidden'
        })
      }
    } catch (err) {
            res.json(err);
    }
});

router.patch('/update/:userID',auth, async (req,res) => {
    try{
      if(req.user.username === 'admin'){
        const updateUser = await user.updateOne({
            _id: req.params.userID}, {$set: {username: req.body.username, email: req.body.email, password: req.body.password, address: req.body.address}}
        );
        res.json(updateUser);
      }
      else{
        res.json({
          'error': 'forbidden'
        })
      }
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


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });

    const User = await user.findOne({ username: username });
    if (!User)
      return res
        .status(400)
        .json({ message: "No account with this email has been registered." });
    console.log(User.username, User.password);
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      {
        id: User._id,
        username: User.username,
      },
      "JWT_SECRET",
      { expiresIn: "1h" }
    );
    console.log("token", token);
    res.json({
      //token,
      // user: {
      //   id: user._id,
      //   username: user.username,
      //   isRecruiter: user.isRecruiter,
      //   token
      // },
      message: "User Logged In Successfully!!",
      token,
      id:User._id,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




module.exports = router;