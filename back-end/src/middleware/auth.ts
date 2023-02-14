import { Request,Response,NextFunction } from "express";
import config from "../config/config";
import User from "../models/user";
import jwt from 'jsonwebtoken';

const duplicateEmail = async(request: Request,response: Response,next: NextFunction) => {
  try {
    const isEmail = await User.findOne({email: request.body.email});
    //Avoid duplicate emails 
    if(isEmail){
      return response.status(403).json({message: "Email already register"});
    }else{
      next();//continue with the next route
    }
  } catch (error) {
    response.status(500).json({message: error})
  }
}
const duplicateUser = async(request: Request,response: Response,next: NextFunction) => {
  try {
    const isEmail = await User.findOne({user: request.body.user});
    //Avoid duplicate emails 
    if(isEmail){
      return response.status(403).json({message: "User already register"});
    }else{
      next();//continue with the next route
    }
  } catch (error) {
    response.status(500).json({message: error})
  }
}
const verifyToken = async (request: Request,response: Response,next: NextFunction) => {
  try {
    let token  = request.headers["x-access-token"];//get the token
    if(!token) return response.status(403).json({message: "No token given"});
    //verify token
    jwt.verify(token.toString(),config.SECRET_WORD,async(err: any,decoded: any)=> {
      //verify if the user exits, otherwise its a uregister user
      const user = await User.findOne({_id: decoded.id});
      if(user){
        next();
      }else{
        response.status(401).json({message: "Unauthorized"})
      }
      
    });  
  } catch (error) {
    response.status(500).json({message: error})
  }
  
}
export {duplicateEmail,duplicateUser,verifyToken}; 