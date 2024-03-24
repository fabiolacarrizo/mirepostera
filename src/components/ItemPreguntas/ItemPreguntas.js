import './ItemPreguntas.css'
import { Link } from 'react-router-dom'
import arrowb from '../../assets/img/arrowb.png'
import { useState } from 'react'

const ItemPreguntas = ({ name, description}) =>{
  const [mostrarMas, setMostrarMas]= useState(false)

       return(
        <div className='card_preguntas'>
       <div> 
        <h4> 
            {name}
        <button onClick={()=>setMostrarMas(!mostrarMas)}>
       {mostrarMas ? <img className='flecha-alreves' src={arrowb}></img> : <img src={arrowb}></img> } </button>
              </h4>
               </div> 

      { mostrarMas ? <div className='p-pregunta'> {description}</div> : null }  

        </div>
    ) 
    

}

export default ItemPreguntas