import './ItemPreguntas.css'
import { Link } from 'react-router-dom'

const Item = ({ name, description, img}) =>{
  

       return(
        <div className='card_preguntas'>
         <div> {name}</div>
        <div> {description}</div> 
        </div>
    ) 
    

}

export default Item