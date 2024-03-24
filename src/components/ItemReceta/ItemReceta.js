import './ItemReceta.css'
import { Link } from 'react-router-dom'

const ItemReceta = ({ name, img, description}) =>{
  

       return(
        <div className='card_receta'>

            <img className='card_productosImgrec' src={img} ></img>
  
  <div className='cart-inforeceta'>
         <h3>{name} </h3>
        <p>{description}</p> 
    </div>    

        </div>
    ) 


}

export default ItemReceta