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
          <div className="input-group">
            <input className="form-control  border-success ms-2 custom-search-input color-b" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-success custom-search-button" type="submit">Search</button>
          </div>
          
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