import React from 'react'
import './product.css'
import { useLocation } from "react-router-dom";
import { useState } from 'react';

const Product = () => {
    const [quantity,setquantity]=useState(0);
    const increment =()=>{
        setquantity(quantity+1);
    }
    const decrement =()=>{
        if (quantity>0){
        setquantity(quantity-1);}
    }
    const location= useLocation();
    console.log("location"+location.state.name);
  return (
    <div className='p-main'>
        <div className='product'>{location.state.name}</div>
        <div className='quantity'>
            <button className='btn' onClick={decrement}>-</button>
            <div>{quantity}</div>
            <button className='btn' onClick={increment}>+</button>
        </div>
    </div>
    
  )
}

export default Product