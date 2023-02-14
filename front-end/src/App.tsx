import React, { useEffect } from 'react';
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PreView from './components/recipe/PreView';
import { useAppSelector } from './shared/hooks';
import Account from './components/pages/Account';
import { getCookie } from './shared/utils';
import { logIn } from './redux/reducers/profile';
import { useDispatch } from 'react-redux';
import { readRecipe } from './redux/reducers/viewRecipe';
import Myrecipes from './components/my-recipes/MyRecipes';
function App() {
  const recipeView = useAppSelector((state) => state.recipe); //read the recipe clicked

  const userSession = useAppSelector((state) => state.login); //read the user logged 
  const dispatch = useDispatch(); 
  const userCookie = getCookie("user");
  
  let isView = true;
  //console.log("STG? ",userCookie);
  useEffect(()=> {
    if(!(userCookie === "" || userCookie === null)){
      const token = getCookie("token")
      dispatch(logIn({currentUser: userCookie,isLoggedIn: true,token:token}))
    }
  
  },[userCookie])
  return (
    <BrowserRouter>
    
      <Header/>
      <ToastContainer />
      <div className="page-container">
        <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>}/> 
          {//
            recipeView.recipe!== ""  && (<Route path='/view' element={<PreView/>}/>)
          }          
          {//procted the routes when the user sing in
            userSession.isLoggedIn === true && (<Route path="/account-details" element={<Account />} />)
          }
          {//procted the routes when the user log out
            userSession.isLoggedIn === false && (<><Route path='/login' element={<Login />} /><Route path='/signup' element={<Register />} /></>)   
          }
          {//Protect the route until the user is logged in
                userSession.isLoggedIn && (<Route path="/my-recipes" element={<Myrecipes />} />) 
          }
          <Route path="*" element={<Landing />} />
        </Routes> 

        </div>
      </div>
      <Footer/>

    </BrowserRouter>
  );  
}

export default App;
