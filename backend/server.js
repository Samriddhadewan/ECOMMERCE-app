import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";

// app config 
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// MIDDLEWARES 
app.use(express.json())
app.use(cors());


// API ENDPOINTS
app.get("/", (req,res)=>{
    res.send("API is Working")
})

app.listen(port, ()=>{
    console.log(`server started on port` + port)
})
