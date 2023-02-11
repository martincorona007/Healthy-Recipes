import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as userService from "../../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorMessage } from "../../shared/messages";
import { schemaLogin } from "../../shared/schema";
import { FormValuesLogin } from "../../shared/types";

function Login() {

  
  const formOptions = { resolver: yupResolver(schemaLogin) };
  const {register,handleSubmit,formState: { errors },} = useForm<FormValuesLogin>(formOptions);
 
  const handlerForm = (data: FormValuesLogin) => {
    
    console.log(data);
    userService.signIn(data).then((response: any)=> {
      console.log("YEs ",response)
      
    }).catch((e: any)=> {
      
     if (e.response.data.message) {
      errorMessage(e.response.data.message);
     }
      
    })
  }
  useEffect(() => {

  }, [])
  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Log In</h5>
              <form onSubmit={handleSubmit(handlerForm)}>
                <div className="form-floating mb-3">
                  <input type="email" className={`form-control ${errors.email ? "is-invalid" : "" }`} id="email" {...register("email")} />
                  <label >Email address</label>
                  <div id="email">
                    <p className="color-validation">{errors.email?.message}</p>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className={`form-control ${ errors.password ? "is-invalid" : ""}`} id="password"{...register("password")}/>
                  <label>Password</label>
                  <div id="password">
                    <p className="color-validation">{errors.password?.message}</p>
                  </div>
                </div>

                <hr className="my-4" />
                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Log
                    in</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Login;