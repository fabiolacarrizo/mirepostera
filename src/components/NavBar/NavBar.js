import './NavBar.css'
import React, {useState} from "react";
import logomr from '../../assets/logomr.png'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'

const NavBar= ()=>{

    return(

    <div className="cart-navbar">

<Link to={'/'}><div className="logo">
<img src={logomr}></img> 
</div>
</Link> 

<div className="menunav">
  
         <Link className='button2' to={'/'}> <span>Inicio</span>  </Link> 
         <Link className='button2'  to={'/productos'}>Productos</Link> 
         <Link className='button2'  to={'/recetas'}>Recetas</Link>
        <Link className='button2'  to={'/preguntasfrecuentes'}>Preguntas Frecuentes</Link>
        <Link className='button2'  to={'/contacto'}> Contacto</Link>
        <Link className='button2'  to={'/login'}> Log</Link>
  
</div>
<CartWidget></CartWidget>
 </div>

    )
}

export default NavBar