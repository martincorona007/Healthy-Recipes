import React from 'react';
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
function App() {
  const userSession = useAppSelector((state) => state.login); //read the user logged 
  console.log("App ",userSession)
  const user = getCookie("user");
  console.log("STG? ",user);
  return (
    <BrowserRouter>
    
      <Header/>
      <ToastContainer />
      <div className="page-container">
        <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>}/> 
          
          <Route path='/view' element={<PreView/>}/>

          {
            userSession.isLoggedIn === true && (<Route path="/account-details" element={<Account />} />)
            
          }
          {
            userSession.isLoggedIn === false && (<><Route path='/login' element={<Login />} /><Route path='/signup' element={<Register />} /></>)   
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
