import axios from "axios";
import { IUser } from "../interfaces/IUser";
export const signUp = async(user: IUser) => {
  return await axios.post<IUser[]>(`${process.env.REACT_APP_APIBACK}/api/v1/auth/signup`,user);
}