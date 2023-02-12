import React from "react";
import { Link } from "react-router-dom"
function CaseB() {
  return (
    <div className="navbar-nav">
      <li className="nav-item" >
        <Link to="/login" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}>Log in</Link>
      </li>
      <li className="nav-item" >
        <Link to="/signup" className="nav-link active" aria-current="page" style={{ whiteSpace: "nowrap" }}>Sign Up</Link>
      </li>
    </div>
  )
}
export default CaseB;