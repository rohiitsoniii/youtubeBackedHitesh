// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'.env'
})

connectDB().then()
.then(
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`app is listening on Port ${process.env.PORT}`)
    })
)
.catch((err)=>{
    console.log("MongoDb connection Failed !!! ",err)
});








// const app = express()

// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.om("error", (error) => {
//         console.log("err: ",error);
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`app is litening on port ${process.env.PORT}`)
//       })
//     } catch (error){
//         console.error("ERROR: " ,error)
//         throw error
//     }
// })()