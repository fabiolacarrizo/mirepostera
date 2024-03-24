import './CartWidget.css'
import { Link } from 'react-router-dom'
import React from "react";
import { useCartContext } from "../../context/CartContext";
import carticon2 from '../../assets/img/carticon2.png'

const CartWidget = () =>{
  const { totalProducts } = useCartContext();

 return (

  <Link to={'/Cart'}>
    <div className='cartWidget'>
  <img  src={carticon2} alt=""></img>
  <div >

     <p className='contador' > <span>{totalProducts() || ""}</span></p>

  </div>
 </div> 
 </Link>
 )
}


export default CartWidget