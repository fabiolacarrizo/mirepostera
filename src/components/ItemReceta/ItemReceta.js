import './ItemReceta.css'
import { Link } from 'react-router-dom'

const ItemReceta = ({ name, img, description}) =>{
  

       return(
        <div className='card_receta'>

            <img className='card_productosImgrec' src={img} ></img>
  

        </div>
    ) 


}

export default ItemReceta