import { RequestHandler } from "express";
import User from '../models/user.model';

export const getUser : RequestHandler = async (req,res) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    res.json(user);
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}
export const updateDataUser : RequestHandler = async (req,res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});//{new: true} - return the object updated
    res.status(200).json(userUpdated);
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}
export const deleteUser : RequestHandler = async(req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json();  
  } catch (e: any) {
    console.log("ERR ",e)
    return res.json(e);
  }
}