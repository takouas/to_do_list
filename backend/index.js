
const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')


// integration frontend backend
const cors = require("cors");
//add cors
app.use(cors());
// import routes
const userRoute = require('./routers/userRoute')
const cnxRoute = require('./routers/cnxRoute')
const todo = require('./routers/todoRoute')

//middelware 
app.use(express.json())

//route middelware
app.use('/user', userRoute)
app.use('/cnx', cnxRoute)
app.use('/todo', todo)

// connect to DB

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })

        .then(()=> console.log('MongoDB is UP.'))
        .catch((err)=> console.log('MongoDB is Down : '+err));
//listen
app.listen(5000, () => {
    console.log("Serveur running on 5000")
})



