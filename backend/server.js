import express from "express"
import  cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//config
const app=express();
const port=4000;

//middleware
app.use(express.json());
app.use(cors());

//Db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get('/',(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})

//mongodb+srv://dhanushdhanu63615:K5UTnp0AEBWHWJEw@cluster0.rqlzbgq.mongodb.net/?