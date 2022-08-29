import { RequestHandler } from "express";
import User from '../models/user.model';
export const getUser : RequestHandler = async (req,res) => {
  const user = await User.findOne({_id: req.params.id});
  res.json(user);
}
export const updateDataUser : RequestHandler = async (req,res) => {
  const userUpdated = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});//{new: true} - return the object updated
  res.status(200).json(userUpdated);
}
export const deleteUser : RequestHandler = async(req,res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json();
}