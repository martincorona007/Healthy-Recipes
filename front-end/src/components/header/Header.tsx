import React from "react";
import { Link } from "react-router-dom"
import logo from '../../assets/logo_long.png'
function Header() {

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
            <div className="navbar-nav ">
              <li className="nav-item" >
                <Link to="/login" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}>Log in</Link>

              </li>
              <li className="nav-item" >
                <Link to="/signup" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}>Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/my-recipes" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}> My Recipes</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;