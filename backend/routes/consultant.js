const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const consultant = require('../model/Consultant');




router.get('/all', async (req,res) => {
    try {
        //console.log("getting all users")
        const allcons = await consultant.find();
        res.json(allcons);
    } catch (err) {
        res.json(err);
    }
});
router.get('/:ConId', async (req, res) => {
    try{
    const findCon = await consultant.findById(req.params.ConId);
    res.json(findCon);
    } catch (err) {
        res.json(err);
    }
});
router.delete('/delete/:ConId', async (req,res) => {
    try{
        const dCon = await consultant.remove({
            _id: req.params.ConId
        })
        if(dCon){
            res.json(dCon);
        }
        else[
            res.json({
                message: null
            })
        ]
    } catch (err) {
            res.json(err);
    }
});

router.patch('/update/:ConId', async (req,res) => {
    try{
        const updateCon = await consultant.updateOne({
            _id: req.params.ConId}, {$set: {name: req.body.name, email: req.body.email, speciality: req.body.speciality, workinghours: req.body.workinghours}}
        );
        res.json(updateCon);
    } catch (err) {
            res.json(err);
    }
});

router.post('/create', async (req,res) => {
    const Con = new consultant({
        name : req.body.name,
        email : req.body.email,
        speciality: req.body.speciality,
        workinghours: req.body.workinghours
    });
    try {
    const saveCon = await Con.save();
    res.status(200).json({ 
        error: 'None',
        status: "success"
    })
   } catch (err){
       res.json(err);
   }
});

module.exports = router;