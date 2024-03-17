import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import Swal from 'sweetalert2'
//import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({boxcont,id, name, code, category, price, stockbox, img, description, data, priceCaja, cantidadxCaja,img2,img3}) =>{
  const [goCart, setGoCart] = useState(false);
  const { addItem } = useCartContext();
  const [ precioVenta, setPrecioVenta] = useState("")
  const [ tipoVenta, setTipoVenta ] = useState("")

const OnAdd = (quantity, precioVenta) =>{
if ( precioVenta <= 0 )
         {
             return(
                 Swal.fire('Escoja el tipo de compra porfavor') 
             )
         }else {
  setGoCart(true);

        const productToAdd = {
            id,
            name,
            price,
            img,
            code,
            category,
            description,
            stockbox,
            boxcont,
            priceCaja,
            cantidadxCaja,
            precioVenta
        }

        addItem(productToAdd, quantity)
 
    }}

  const navigate = useNavigate()


 return(
    <div className="card-detalleItem"> 
    <div className="card-detalleImgVolver">
   <button style={{width:100}}  className="button1" onClick={() => (navigate(-1)) }><span> Volver</span></button>
   
<img src={img} alt=""></img> 
  
      
    </div>

     <div className='cart-descriptionProduct'>
      <h3>{name}</h3>
      <p>{description}</p>


      <div onChange={(e) => setPrecioVenta(e.target.value)}>
        <p><input  type="radio" value={priceCaja} name="tipoventa"/> 
         Al Detal:  USD${priceCaja} | {cantidadxCaja} </p> 

        <p> <input type="radio" value={price} name="tipoventa" /> 
         X Mayor: USD${price} | {boxcont} </p>
      </div>
    

      {
        goCart
        ? ( <p className='cart-botonesDetail'> <Link className='out-underline' to={'/'} ><button className='button1'> <span>Seguir Comprando</span></button> </Link>
        <Link className='out-underline' to={'/cart'} > <button className='button1'> <span>Finalizar Compra</span></button></Link> </p> )
         : <Counter onAdd={OnAdd} stockbox={stockbox} precioVenta={precioVenta}/>
      }

    
      </div>
  </div>
 )





}

export default ItemDetail