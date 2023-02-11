import React, {useState,useEffect, ChangeEvent,FormEvent} from "react"; 
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/auth"
import { errorMessage,successMessage } from "../../shared/messages";

const initialState = {
  firstName: "",
  lastName: "",
  user: "",
  email: "",
  password: "",
  confirmPassword: "" 
}

function Register(){

  const changeRute = useNavigate();// change path
  const [user,setUser] = useState(initialState);
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user,[e.target.id]: e.target.value})
  }
  const handlerForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(e)
    console.log(user)

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
                <form onSubmit={handlerForm}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="firstName" placeholder="namesa" aria-describedby="user" value={user.firstName} onChange={handlerInput}/>
                    <label >First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastName" placeholder="namesa" aria-describedby="user" value={user.lastName} onChange={handlerInput}/>
                    <label >Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="user" placeholder="namesa" aria-describedby="user" value={user.user} onChange={handlerInput}/>
                    <label >User</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="email" placeholder="name@example.com" value={user.email} onChange={handlerInput}/>
                    <label >Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={user.password} onChange={handlerInput}/>
                    <label>Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"value={user.confirmPassword} onChange={handlerInput}/>
                    <label>Confirm Password</label>
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