import mongoose,{ConnectOptions} from "mongoose";
import config from "../config/config";
(async ()=> { 
  try{
    const mongooseOptions: ConnectOptions = {
      //user: config.MONGO_USER, 
      //pass: config.MONGO_PASSWORD
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}:27017/calis`);
    // const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.1xerqaa.mongodb.net/?retryWrites=true&w=majority`)
  // console.log('database is connected to ',db.connection.name)
  }catch(error){
    //console.log("ERROR database ",error)
  }
 
})()