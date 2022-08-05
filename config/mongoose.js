const mongoose=require('mongoose');
// db connection
const db='mongodb+srv://nav:singh1990@cluster0.j84glrr.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db)
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))

