import {Schema,model} from 'mongoose';
const userSchema = new Schema (
  {
    firstName: {
      type: String,
      required: true,
      trime: true,//remove white space at the start and end
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    }
  },{
    versionKey: false,
    timestamps: true
  }
)
export default model('User',userSchema)