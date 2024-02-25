import './NavBar.css'
import React, {useState} from "react";import './NavBar.css'
import logomr from '../../assets/logomr.png'

const NavBar= ()=>{

    return(

    <div className="cart-navbar">

 <div className="logo">
<img src={logomr}></img> 
</div>

<div className="menunav">
    <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Cursos</li>
        <li>Preguntas Frecuentes</li>
        <li>Contacto</li>
    </ul>
</div>

 </div>

    )
}

export default NavBar