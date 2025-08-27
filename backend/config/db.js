import mongoose  from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://dhanushdhanu63615:K5UTnp0AEBWHWJEw@cluster0.rqlzbgq.mongodb.net/food-del').then(()=>console.log("Db connected"));
}
