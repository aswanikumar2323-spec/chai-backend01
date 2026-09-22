import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const  connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}
export default connectDB





// import express from "express"

// const app = express()

// ( async ()=>{
//     try {
//         const con =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening at port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR:",error);
//         throw error
//     }
// }
// )();