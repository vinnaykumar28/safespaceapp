const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');

const app = express();
app.use(body.json());

const userRouter = require('./routes/user');
const bookingRouter = require('./routes/booking');
const consultantRouter = require('./routes/consultant');
app.use('/user', userRouter);
app.use('/booking', bookingRouter);
app.use('/consultant', consultantRouter);

app.get('/', (req,res) => {
    res.send('homepage');
})





mongoose.connect('mongodb+srv://mk:mk123@webdev.bksxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true},
() => {
    console.log('database connected succesfully');
});




app.listen(5000, () => {
    console.log('server is listening on port 5000.....');
})