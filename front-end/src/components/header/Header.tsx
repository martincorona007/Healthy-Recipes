import React from "react";
import { Link } from "react-router-dom"
import logo from '../../assets/logo_long.png'
import { useAppSelector } from "../../shared/hooks";
import CaseA from "./CaseA";
import CaseB from "./CaseB";
function Header() {

  const userSession = useAppSelector((state) => state.login);
  
  console.log("USER => ",userSession)
  return (

    <nav className="navbar navbar-expand-md navbar-success bg-success bg-opacity-25">
      <div className="container">

        <Link to="/" className="row col-sm-12 col-md-2">
          <img src={logo} alt="Logo" className="d-inline-block align-text-top size-image"></img>
        </Link>

        <form className="d-flex" style={{ 'width': '100%' }} role="search">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="input-group">
            <input className="form-control  border-success ms-2 custom-search-input color-b" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-success custom-search-button" type="submit">Search</button>
          </div>

        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            
              {/*TRUE CASE user log in*/}
              {userSession.isLoggedIn === true && (<CaseA/>)}
              {/*FALSE CASE user log out*/}
              {userSession.isLoggedIn === false && (<CaseB/>)}
            
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;