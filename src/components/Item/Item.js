import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, code, price , img, category,visible, priceCaja}) =>{
  


    if (category === "ofertas" && visible !== "privado") {
        return(
            <div className='card_productos'>
            <p className='oferta-cart'>Oferta!</p>
            <img className='card_productosImg' src={img} alt={name}></img>
      <h6>DQ{code}</h6>
            <p> {priceCaja > 0 ? 'Caja: USD$'+ priceCaja : "" }</p> 
            <p>{price > 0 ? 'Bulto: USD$' + price : ""}</p>
            <Link className='boton-detalle'  to={`/detail/${id}`}>Ver detalle</Link>
        </div>)
    }

    if(visible !== "privado"){
       return(
        <div className='card_productos'>
            <img className='card_productosImg' src={img} alt={name}></img>
       
            <p> {priceCaja > 0 ? 'Caja: USD$'+ priceCaja : "" }</p> 
            <p>{price > 0 ? 'Bulto: USD$' + price : ""}</p>
        
            <Link className='boton-detalle'  to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    ) 
    }

}

export default Item