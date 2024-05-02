import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price , img, visible, priceCaja}) =>{
  
    if(visible !== "privado"){
       return(
        <div className='card_productos'>
            <img className='card_productosImg' src={img} alt={name}></img>
       
         <h4>{name}</h4>
            <p> {priceCaja > 0 ? 'USD$'+ priceCaja : "" }</p> 
            <p>{price > 0 ? 'Mayorista: USD$' + price : ""}</p>
        
            <Link className='boton-detalle'  to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    ) 
    }

}

export default Item