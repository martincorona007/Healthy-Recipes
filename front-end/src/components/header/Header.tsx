import React from "react";
import logo from '../../assets/logo_long.png'
function Header() {

  return (
    
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
         <div className="row col-sm-12 col-md-2" >
              <img src={logo} alt="Logo" className="d-inline-block align-text-top size-image"></img>
         </div> 

        <form className="d-flex" style={{'width': '100%'}} role="search">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input className="form-control me-2 ms-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
       

 
        



        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            
          </ul>

        </div>





      </div>
    </nav>
  )
}
export default Header;