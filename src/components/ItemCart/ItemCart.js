import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './ItemCart.css';
import deleteicon from '../../../src/assets/img/deleteicon.png'


const ItemCart = ({ img, name , price, quantity, id, code, boxcont, precioVenta, cantidadxCaja}) => {

    const { removeProduct } = useContext(CartContext);


    return (
        
        <div className='cart_detail'>
          
         <img className='cart_detailImg'  src={img} alt={name} />
            <div className='cart_detailDatos'> 
                
                <p>{ precioVenta < price ? 'Detal' : 'Mayorista' }</p>  
                <p>Unidades: { precioVenta < price ? cantidadxCaja : boxcont }</p>  
                <p>Cantidad: {quantity}</p> 
                <p>x</p>
                <p>Precio: USD${precioVenta}</p>
                <p>=</p>    
                <p>Subtotal: USD$ {quantity * precioVenta}</p>
              
                <button className='button-delete' onClick={() => removeProduct(id)}> <img style={{width:40 , height:40}} src={deleteicon}></img></button>
            </div>
        </div>
    )
}

export default ItemCart