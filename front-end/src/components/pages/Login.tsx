import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUserAuth } from "../../interfaces/IUser";
import * as userService from "../../services/auth";
import { toast } from "react-toastify";
function Login() {

  const initialState = {
    email: "",
    password: "",
  }
  const [user, setUser] = useState<IUserAuth>(initialState);
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handlerForm = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    userService.signIn(user).then((response: any)=> {
      console.log("YEs ",response)
      toast.success("Success login", { 
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }).catch((response: any)=> {
      console.log("NEL ",response);
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
              <form onSubmit={handlerForm}>
                <div className="form-floating mb-3">
                  <input type="email" name="email" className="form-control" placeholder="name@example.com" onChange={handlerInput}  />
                  <label >Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="password" className="form-control" placeholder="Password" onChange={handlerInput}  />
                  <label>Password</label>
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