import './NavBar.css'
import React, {useState} from "react";
import logomr from '../../assets/logomr.png'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'

const NavBar= ()=>{
    const [isOpen, setIsOpen] = useState(false)

    return(
<div className="navbar">
  
  <div className={`nav_items ${isOpen && "open"}`}>
          <Link className='button2' to={'/'}> <span>Inicio</span>  </Link> 
         <Link className='button2'  to={'/productos'}>Productos</Link> 
         <Link className='button2'  to={'/recetas'}>Recetas</Link>
        <Link className='button2'  to={'/preguntasfrecuentes'}>Preguntas Frecuentes</Link>
        <Link className='button2'  to={'/contacto'}> Contacto</Link>
        <Link className='button2'  to={'/login'}> Log</Link>
  </div> 
       
  <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
      <span></span>
      <span></span>
      <span></span>
  </div>

    <div className="nav_logo"><Link to={'/'}><img src={logomr}></img></Link>  
    <ul>
    <li>RIF J-50445575-0 </li>
    <li>Guatire - Edo.Miranda</li>
    <li>Emprendimiento Mariann Mendoza</li>
    </ul>
    </div>
    
  <CartWidget></CartWidget>
</div>

    )
}

export default NavBar