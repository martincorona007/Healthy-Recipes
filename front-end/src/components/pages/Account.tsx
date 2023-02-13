
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces/IUser";
import { useAppSelector } from "../../shared/hooks";
import { errorMessage, successMessage } from "../../shared/messages";
import { schemaAccount } from "../../shared/schema";
import { FormValuesAccount } from "../../shared/types";
import * as userService from "../../services/user"
function Account(){
  const userSession = useAppSelector((state) => state.login); 
  const initialState = {firstName: "",lastName: "",user: "",email: "",};
  const [user, setUser] = useState<IUser>(initialState);
  const formOptions = { resolver: yupResolver(schemaAccount) };
  const { register,handleSubmit, reset, formState: { errors },} = useForm<FormValuesAccount>(formOptions);

  const handlerForm = async (data: FormValuesAccount) => {
    await userService.updateAccountUser(userSession.currentUser, user, userSession.token)
      .then((response: any) => {
      
        successMessage("Account updated");
      })
      .catch((e: any) => {
        if (e.response.data.message) {
          errorMessage(e.response.data.message);
        }
      });
  };
  const handlerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getUserData = async () => {
    await userService.getUserInformation(userSession.currentUser, userSession.token)
      .then((response: any) => {
       
        setUser({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          user: response.data.user,
          email: response.data.email,
        });
        reset({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          user: response.data.user,
          email: response.data.email,
        });
      })
      .catch((e: Error) => console.log("NEL ", e));
  };
  useEffect(()=>{
    getUserData();
  },[])

  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Account Details </h5>
            <form className="col" onSubmit={handleSubmit(handlerForm)}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className={`form-control ${ errors.firstName ? "is-invalid" : ""}`} id="firstName" {...register("firstName")} aria-describedby="firstName" value={user.firstName} onChange={handlerInputChange}/>
                  <div id="firstName">
                    <p className="color-validation">{errors.firstName?.message}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className={`form-control ${ errors.lastName ? "is-invalid" : ""}`}id="lastName" {...register("lastName")} value={user.lastName} onChange={handlerInputChange} />
                  <div id="lastName">
                    <p className="color-validation"> {errors.lastName?.message} </p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">User</label>
                  <div className="input-group ">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                    <input type="text" className={`form-control ${ errors.user ? "is-invalid" : "" }`} id="user" {...register("user")} value={user.user}onChange={handlerInputChange}/>
                  </div>
                  <div id="user">
                    <p className="color-validation">{errors.user?.message}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className={`form-control ${ errors.email ? "is-invalid" : "" }`} id="email" {...register("email")} value={user.email} onChange={handlerInputChange} />
                  <div id="email">
                    <p className="color-validation">{errors.email?.message}</p>
                  </div>
                </div>
                <div className="mb-2 align-end">
                  <button type="submit" className="btn btn-success "> Update </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}
export default Account;