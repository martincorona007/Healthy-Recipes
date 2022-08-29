import { RequestHandler } from "express";
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import User from "../models/user.model";
import config from "../config/config";

export const singUpUser : RequestHandler = async (req,res) => {
  try{
    //genSalt = call the algorithm and how many times we are going to apply the algorithm
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(req.body.password,salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      user: req.body.user,
      email: req.body.email,
      password: hashedPassword
    })
    newUser.save();
    
    return res.status(200).json({message: "User register successfully!"});
  }catch(e: any){
    //console.log("Negativo ",e);
    return res.status(500).json(e);
  }
}
export const singInUser : RequestHandler = async (req,res) => {
  try{
    const user = await User.findOne({email: req.body.email});
    //check if the user is not found
    if(!user) return res.status(400).json({message: "User not Found"});
    
    const isMatchPassword = await bycrypt.compare(req.body.password,user.password);
    if(!isMatchPassword) return res.status(401).json({token: null,message: "Invalid Password"});
    
    const token = jwt.sign({id: user._id},config.SECRET_WORD,{expiresIn: 86400})
    
    return res.status(200).send({token,user});
  }catch(e: any){
    //console.log("Negativo ",e);
    return res.status(500).json(e);
  }
}