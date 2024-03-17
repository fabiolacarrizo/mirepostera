import './CartWidget.css'
import { Link } from 'react-router-dom'
import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () =>{
  const { totalProducts } = useCartContext();

 return (

   <Link to={'/Cart'}>
    <div className='cartWidget'>
  <h1>carrito</h1>
  <div >

     <p className='contador' > <span>{totalProducts() || ""}</span></p>

  </div>
 </div> 
 </Link>
 )
}


export default CartWidget