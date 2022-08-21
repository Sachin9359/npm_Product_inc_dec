import React from 'react';
import './App.css';
import Mainpage from './Mainpage/Mainpage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Product from './Product/Product';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route exact path='/singleproduct' element={<Product />}/>
      </Routes>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
