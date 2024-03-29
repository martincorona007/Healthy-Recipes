import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { logOut } from "../../redux/reducers/profile";
import { removeCookie } from "../../shared/utils";
function CaseA() {
  const changeRoute = useNavigate();
  const dispatch = useDispatch(); //update redux
  const handlerLogOut = () => {
    
    dispatch(logOut({ currentUser: "", isLoggedIn: false, token: "" }));
    changeRoute("/");
    removeCookie("user");
    removeCookie("token");
  }
  return (
    <div className="navbar-nav">
      <li className="nav-item">
        <Link to="/my-recipes" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}> My Recipes</Link>
      </li>
      <li className="nav-item">
        <Link to="/account-details" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}>Account</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }} onClick={handlerLogOut}>Log out</a>
      </li>
    </div>

  )
}
export default CaseA;