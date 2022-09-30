import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './fragment/Header';
import React, { useState, useEffect } from 'react';
import Footer from './fragment/Footer';
function App() {

  return (
    <>
    <div className='wrapper1'>
      <div className='wrapper2'>
    <Header></Header>
    </div>
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;
