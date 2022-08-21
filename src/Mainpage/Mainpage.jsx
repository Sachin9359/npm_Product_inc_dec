import React from 'react'
import "./mainpage.css"
import { useNavigate } from "react-router-dom"


const Mainpage = () => {
  const category1=[{
    name:"product11"
  },{
    name:"product12"
  },{
    name:"product13"
  }]

  const category2=[{
    name:"product21"
  },{
    name:"product22"
  },{
    name:"product23"
  }]


  const navigate=useNavigate();

  function navigateToSingleProduct (proname) {
    navigate('/singleproduct',{state:{name:proname}});
  
  };

  return (
    <div className="mainpage">
        <div className="c-heading">
            Category 1
        </div>
        <div className='c1'>
        {category1.map((index)=>(<div className='product' onClick={() => navigateToSingleProduct(index.name)}>{index.name}</div>))}
        </div>
        <div className="c-heading">
            Category 2
        </div>
        <div className='c1'>
        {category2.map((index)=>(
  
        <div className='product' onClick={() => navigateToSingleProduct(index.name)}>{index.name}</div>
        ))}
        </div>
    </div>
  )
}

export default Mainpage