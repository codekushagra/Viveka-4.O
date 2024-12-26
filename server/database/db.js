import mongoose from "mongoose";


export const connectDb = async () =>{
    try
    {
        await mongoose.connect(process.env.DB);
        console.log('Database Connected Successfully');
    }
    catch (error)
     {
        console.log(error);
     }
};