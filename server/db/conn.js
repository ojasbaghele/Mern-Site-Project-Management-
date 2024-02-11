const mongoose = require('mongoose');
// const DB = process.env.DATABASE;
const db = "mongodb+srv://logandreg:dbpass@cluster0.beztdj7.mongodb.net/mern_site?retryWrites=true&w=majority"

mongoose.connect(db)
  .then(()=>{
    console.log("Connected to MongoDB")
  })
  .catch((err)=>console.log("Not Connected to MongoDB"));