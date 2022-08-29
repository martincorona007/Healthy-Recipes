import mongoose,{ConnectOptions} from "mongoose";
import config from "../config/config";
(async ()=> { 
  try{
    const mongooseOptions: ConnectOptions = {
      //user: config.MONGO_USER, 
      //pass: config.MONGO_PASSWORD
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions);
   // const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.icov7ks.mongodb.net/?retryWrites=true&w=majority`)
   console.log('database is connected to ',db.connection.name)
  }catch(error){
    console.log("ERROR database ",error)
  }
 
})()