import {IUser} from '../interfaces/IUser'
import  axios  from 'axios';
import {contentAndAuthToken} from './auth-header'
export const getUserInformation = async(idUser: string,token: string) => {
  return  await axios.get(`${process.env.REACT_APP_APIBACK}/api/v1/user/${idUser}`,{headers: contentAndAuthToken(token)})
}
export const updateAccountUser = async(idUser: string,data: IUser,token: string)=> {
  return await axios.put(`${process.env.REACT_APP_APIBACK}/api/v1/user/${idUser}`,data,{headers: contentAndAuthToken(token)}) 
}