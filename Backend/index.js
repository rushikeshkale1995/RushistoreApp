import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/Book.route.js";
import userRoute from  "./route/user.route.js"
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI;

// Connect to MongoDb
try{
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Connected the MongoDB')
}catch(error){
     console.log("Error:", error)
}

// Defining Route
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, ()=> {
    console.log(`Example app of listen on port ${PORT}`)
})