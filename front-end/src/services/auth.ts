import axios from "axios";
import { IUser,IUserAuth } from "../interfaces/IUser";
export const signUp = async(user: IUser) => {
  return await axios.post<IUser[]>(`${process.env.REACT_APP_APIBACK}/api/v1/auth/signup`,user);
}
export const signIn = async(user: IUserAuth) => {
  return await axios.post<IUserAuth[]>(`${process.env.REACT_APP_APIBACK}/api/v1/auth/singin`,user);
}