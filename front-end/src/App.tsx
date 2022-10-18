import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
function App() {
  return (
    <>
    
      <Header/>
      <div className="page-container">
        <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
        </Routes>         
        </div>
      </div>
      <Footer/>

    </>
  );  
}

export default App;
