import {Schema,model} from 'mongoose';
const recipeSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    recipeLink: {
      type: String,
      required: true,
    },
    recipeName: {
      type: String,
      required: true
    }
  },{
    versionKey: false,
    timestamps: true
  }
)
export default model('Recipe',recipeSchema)