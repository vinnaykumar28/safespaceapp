const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const consultant = require('../model/Consultant');
const auth = require('../middleware/auth');


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
        const allcons = await consultant.find().limit(limit).skip(skip);
        res.json(allcons);
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

router.get('/:ConId', async (req, res) => {
    try{
        if(req.user.username === 'admin'){   
    const findCon = await consultant.findById(req.params.ConId);
    res.json(findCon);
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
router.delete('/delete/:ConId', async (req,res) => {
    try{
        if(req.user.username === 'admin'){ 
        const dCon = await consultant.remove({
            _id: req.params.ConId
        })
        if(dCon){
            res.json(dCon);
        }
        else{
            res.json({
                message: null
            })
        }
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

router.patch('/update/:ConId', async (req,res) => {
    try{
        if(req.user.username === 'admin'){ 
        const updateCon = await consultant.updateOne({
            _id: req.params.ConId}, {$set: {name: req.body.name, email: req.body.email, speciality: req.body.speciality, workinghours: req.body.workinghours}}
        );
        res.json(updateCon);
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

router.post('/create', auth, async (req,res) => {
    
    const Con = new consultant({
        name : req.body.name,
        email : req.body.email,
        speciality: req.body.speciality,
        workinghours: req.body.workinghours
    });
    try {
    if(req.user.username === 'admin'){ 
    const saveCon = await Con.save();
    res.status(200).json({ 
        error: 'None',
        status: "success"
    })
    }
    else{
        res.json({
          'error' : 'forbidden'
        })
    }
   } catch (err){
       res.json(err);
   }
});

module.exports = router;