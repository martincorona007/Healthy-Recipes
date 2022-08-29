import { RequestHandler } from "express";
import User from '../models/user.model';
export const getUser : RequestHandler = async (req,res) => {
  const user = await User.findOne({_id: req.params.id});
  res.json(user);
}