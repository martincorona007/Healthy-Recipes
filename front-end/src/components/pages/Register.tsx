import { yupResolver } from "@hookform/resolvers/yup";
import React, {useEffect} from "react"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/auth"
import { errorMessage,successMessage } from "../../shared/messages";
import { schemaRegister } from "../../shared/schema";
import { FormValuesRegister } from "../../shared/types";



function Register(){

  const changeRute = useNavigate();// change path


  const formOptions = { resolver: yupResolver(schemaRegister) };
  const { register,handleSubmit,formState: { errors }, } = useForm<FormValuesRegister>(formOptions);

  const handlerForm = async (user: FormValuesRegister) => {
    //console.log(user)

    try {
      await authService.signUp({
        firstName: user.firstName,
        lastName: user.lastName,
        user: user.user,
        email: user.email,
        password: user.password
        
      }).then((response: any)=> {
        //console.log("SUCCESSsssin",response); 
        
        successMessage(response.data.message);
        changeRute("/")
      }).catch((e: any)=> {
        //console.log("> ",e.response.data.message)
        if (e.response.data.message) {
          errorMessage(e.response.data.message);
        }
      })      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    //console.log(user);
  },[])
  return(
  
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sing Up</h5>
                <form onSubmit={handleSubmit(handlerForm)}>
                  <div className="form-floating mb-3">
                    <input type="text"  className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`} id="firstName" {...register("firstName")} placeholder="First Name"  />
                    <label >First Name</label>
                    <div id="firstName">
                      <p className="color-validation">{errors.firstName?.message}</p>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} id="lastName" {...register("lastName")} placeholder="Last Name"  />
                    <label >Last Name</label>
                    <div id="lastName">
                      <p className="color-validation">{errors.lastName?.message}</p>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <label className="form-label">User</label>
                    <div className="input-group ">
                      <span className="input-group-text" id="inputGroupPrepend3">
                        @
                      </span>                    
                      <input type="text" className={`form-control ${errors.user ? "is-invalid" : ""}`} id="user" {...register("user")} placeholder="User" />
                    </div>
                    <div id="user">
                      <p className="color-validation">{errors.user?.message}</p>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className={`form-control ${ errors.email ? "is-invalid" : "" }`} id="email" {...register("email")} placeholder="name@example.com" />
                    <label >Email address</label>
                    <div id="email">
                      <p className="color-validation">{errors.email?.message}</p>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className={`form-control ${ errors.password ? "is-invalid" : "" }`} id="password" {...register("password")} placeholder="Password" />
                    <label>Password</label>
                    <div id="password">
                      <p className="color-validation">{errors.password?.message}</p>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password"  className={`form-control ${ errors.confirmPassword ? "is-invalid" : "" }`} id="confirmPassword" {...register("confirmPassword")} placeholder="Confirm Password"/>
                    <label>Confirm Password</label>
                    <div id="confirmPassword">
                      <p className="color-validation">{errors.confirmPassword?.message}</p>
                    </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-login text-uppercase fw-bold" >Sing 
                      Up</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
export default Register;