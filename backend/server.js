import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/prouctRoute.js";


// app config 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES 
app.use(express.json())
app.use(cors());


// API 
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", (req,res)=>{
    res.send("API is Working")
})

app.listen(port, ()=>{
    console.log(`server started on port` + port)
})
