const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const booking = require('../model/Booking');
const auth = require('../middleware/auth');




router.get('/all', auth, async (req,res) => {
    try {
      if(req.user.username === 'admin'){
          console.log(req.user.username);
        let {page, size, search} = req.query;
        if(!page){
          page = 1;
        }
        if(!size){
          size = 10;
        }

        const limit =  Number(size);
        const skip = (page - 1) * size;
        const allbook = await booking.find().limit(limit).skip(skip);
        res.json(allbook);
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
// router.get('/:BookingBy', auth, async (req, res) => {
//     try{
//     if(req.user.username === req.params.BookingBy || req.user.username === 'admin'){
//     const findBook = await booking.find({bookingBy: req.params.BookingBy});
//     res.json(findBook);
//     }
//     else{
//         res.json({
//           'error' : 'forbidden'
//         })
//     }
// }
//     catch (err) {
//         res.json(err);
//     }
// });

router.get('/:BookingId', auth, async (req, res) => {
    try{
    if(req.user.id === req.params.BookingId || req.user.username === 'admin'){
    const findBook = await booking.find({bookingBy : req.user.username});
    res.json(findBook);
    }
     else{
         res.json({
         'error' : 'forbidden'
         })
    }
}
    catch (err) {
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
        bookingBy: req.body.bookingBy,
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