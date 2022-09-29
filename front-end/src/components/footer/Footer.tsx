import React from "react";
import pinterest from '../../assets/pinterest_logo.png'
import instagram from '../../assets/instagram_logo.png'
import facebook from '../../assets/facebook-logos.png'
import twitter from '../../assets/twitter_logo.png'
import logo from '../../assets/logo_long.png'

function Footer(){
  return(
    <>
     <div className="container-fluid" >
        <div className="row background-section-a pt-3">
        
          <div className="col-sm  d-flex align-items-center"> 
            <div className="col d-flex justify-content-around">
              <a href="https://www.instagram.com/"><img className="image-logo-size" src={instagram} /></a>
              <a href="https://twitter.com/"><img className="image-logo-size" src={twitter} /></a>
              <a href="https://www.facebook.com/"><img className="image-logo-size" src={facebook} /></a>
              <a href="https://www.pinterest.com/"><img className="image-logo-size" src={pinterest} /></a>
            </div> 
          </div>
          <div className="col-sm pt-3">
          <div className="row" role="search">
            <h4>Subscribe to our weekly newsletter.</h4>
            <form className="d-flex" role="search">
            <input className="form-control me-2"  placeholder="Email address" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Suscribe</button>
            </form>
            

          </div>
          </div>
        </div>
        <div className="row pt-3" style={{'background': '#EAECEF', 'textAlign': 'center'}}>
          <p>© 2022 Martin Corona. Design by <a className="ps-1" href="www.linkedin.com/in/martin-corona-a019a2169"> Martin Corona </a> </p>   
        </div>
     </div>

    </>
  )
}
export default Footer; 