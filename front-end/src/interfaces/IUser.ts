export interface IUser {
  _id?: string,
  firstName: string,
  lastName: string,
  user: string,
  email: string,
  password: string,
  createdAt?: string,
  updtedAt?: string,
}
export interface IUserAuth{
  email: string,
  password: string
}