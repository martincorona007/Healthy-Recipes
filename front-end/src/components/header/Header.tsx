import { yupResolver } from "@hookform/resolvers/yup";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/logo_long.png'
import { searchRecipe } from "../../redux/reducers/search";
import { useAppSelector } from "../../shared/hooks";
import { schemaInput } from "../../shared/schema";
import { FormValuesInput } from "../../shared/types";
import CaseA from "./CaseA";
import CaseB from "./CaseB";

function Header() {
  const changeRoute = useNavigate();
  const dispatch = useDispatch(); //update redux
  const userSession = useAppSelector((state) => state.login);//read the user logged in
  const searchInputRecipe = { resolver: yupResolver(schemaInput) };
  const {register,handleSubmit,formState: { errors },} = useForm<FormValuesInput>(searchInputRecipe);//form validation
  //console.log("USER => ",userSession)
  const handlerSearch = async (e: FormEvent<HTMLFormElement> | any) => {
    if (!(e.inputSearch === "")) {//add search bar functionality
      console.log("writting ",e.inputSearch)
      dispatch(searchRecipe({ searchStack: e.inputSearch }));
      // changeRoute("/")
    }
  };
  return (

    <nav className="navbar navbar-expand-md navbar-success bg-success bg-opacity-25">
      <div className="container">

        <Link to="/" className="row col-sm-12 col-md-2">
          <img src={logo} alt="Logo" className="d-inline-block align-text-top size-image"></img>
        </Link>

        <form className="d-flex" style={{ 'width': '100%' }} role="search" onSubmit={handleSubmit(handlerSearch)}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="input-group">
            <input className={`form-control ms-2 border-success custom-search-input color-b ${ errors.inputSearch ? "is-invalid" : "" }`}  type="search" placeholder="Search" aria-label="Search" {...register("inputSearch")}></input>
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