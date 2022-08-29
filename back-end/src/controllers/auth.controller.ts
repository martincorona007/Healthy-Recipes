import { RequestHandler } from "express";
import User from "../models/user.model";

export const singUpUser : RequestHandler = async (req,res) => {
  try{
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      user: req.body.user,
      email: req.body.email,
      password: req.body.password
    })
    newUser.save();
    return res.status(200).json({message: "User register successfully!"});
  }catch(e: any){
    console.log("Negativo ",e);
    return res.status(500).json(e);
  }
}