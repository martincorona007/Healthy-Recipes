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
function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <ToastContainer />
      <div className="page-container">
        <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/view' element={<PreView/>}/>
        </Routes>         
        </div>
      </div>
      <Footer/>

    </BrowserRouter>
  );  
}

export default App;
