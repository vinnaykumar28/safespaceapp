const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const booking = require('../model/Booking');
const auth = require('../middleware/auth');





router.get('/all', async (req,res) => {
    try {
        //console.log("getting all users")
        const allbook = await booking.find();
        res.json(allbook);
    } catch (err) {
        res.json(err);
    }
});
router.get('/:BookingId', auth,async (req, res) => {
    try{
    const findBook = await booking.findById(req.params.BookingId);
    res.json(findBook);
    } catch (err) {
        res.json(err);
    }
});
router.delete('/delete/:BookingID', auth, async (req,res) => {
    try{
        const dBook = await booking.remove({
            _id: req.params.BookingID
        })
        if(dBook){
            res.json(dBook);
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

router.patch('/update/:BookingID', auth,  async (req,res) => {
    try{
        const updateBook = await booking.updateOne({
            _id: req.params.BookingID}, {$set: {bookingTime: req.body.bookingTime, patientName: req.body.patientName, consultantName: req.body.consultantName, confirmation: req.body.confirmation}}
        );
        res.json(updateBook);
    } catch (err) {
            res.json(err);
    }
});

router.post('/create', auth, async (req,res) => {
    const Book = new booking({
        bookingTime: req.body.bookingTime,
        patientName: req.body.patientName,
        consultantName: req.body.consultantName,
        confirmation: req.body.confirmation
    });
    try {
    const saveBook = await Book.save();
    res.status(200).json({ 
        error: 'None',
        status: "success"
    })
   } catch (err){
       res.json(err);
   }
});

module.exports = router;