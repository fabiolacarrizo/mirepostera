import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './Checkout.css'
import logo2 from '../../assets/img/logo2.png'

 const Checkout= ({ products}) =>{
    const { cart, totalPrice, clearCart, totalProducts } = useCartContext();
	const [loading, setLoading] = useState(true)

	const [personalData, setPersonalData] = useState(false)
	const navigate = useNavigate()
    
	const [datosCompra, setDatosCompra] = useState({}) 

const completoDatos = (name, tlf, email, checkEmail, direction, directionNumber, cp,location, province, comment) =>{
	setDatosCompra({name, tlf, email, checkEmail, direction, directionNumber, cp,location, province, comment})
	setPersonalData(true)
}

	const order =  {
		buyer: datosCompra,
		items: cart.map((data) => ({
			id: data.id,
			title: data.name,
			precioVenta: data.precioVenta,
			price:data.price,
			quantity: data.quantity,
			code: data.code,
			category: data.category,
			priceCaja:data.priceCaja,
		})),
		total: totalPrice(),
		totalproducts: totalProducts(),
        date: Date("25-03-2015"),
	} 

	const handleClick = async () => {
		try {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));


setTimeout(() => {
	navigate('/')
	clearCart()
}, 2000)
Swal.fire({
	title: "Gracias por su compra, confirme enviar el pedido por whatsapp",
	text:`Pronto uno de nuestros vendedores se pondra en contacto con usted`,
	icon: "success",
	buttons: true,
	dangerMode: true,
})	
}catch (error) {
	console.log(error)
} finally {
	setLoading(false)
}} 


	
/*
const clickCompra = ()=>{
	setTimeout(() => {
		navigate('/')
		clearCart()
	}, 2000)
	Swal.fire({
		title: "Gracias por su compra, confirme enviar el pedido por whatsapp",
		text:`Pronto uno de nuestros vendedores se pondra en contacto con usted`,
		icon: "success",
		buttons: true,
		dangerMode: true,
	})	
}
*/

const wPedido= `https://api.whatsapp.com/send?phone=5491126146888&text=Hola,%20Quisiera%20realizar%20un%20pedido.%0ACliente:%20${order.buyer.name}%20TLF:${order.buyer.tlf}%20Email:${order.buyer.email}%0ADatos%20Envio:%0ADireccion:%20${order.buyer.direction}%0AAltura:%20${order.buyer.directionNumber}%0ALocalidad:%20${order.buyer.location}%0AProvincia:%20${order.buyer.province}%0ACP:%20${order.buyer.cp}%0ATransporte:%20${order.buyer.comment}
%0AProductos:%0A${order.items.map((items)=>{return `%20-${items.title}+%20DQ${items.code}+%20${items.precioVenta === items.price ? 'Bultos' :'Cajas'}%20${items.quantity}+x%20Precio%20USD$${items.precioVenta === items.price ? items.price : items.precioVenta}%20=%20SubTotal%20USD$${items.precioVenta === items.price ? items.quantity * items.price :  items.quantity * items.precioVenta  }%0A ` })}
%0ATotal%20Productos:%20${order.totalproducts}
%0ATotal:USD$${order.total}`




    return(
        <div className="checkout-container" >
            <h2 className="titulo-finalizarcompra">Finalizar Compra</h2>
        

	 {	 personalData ? 	(<a onClick={handleClick} href={wPedido} target="_blank" style={{width:150}} className="button1 button-checkout" > <span  > Emitir Compra</span> </a> )   : 
	  (<FormCheckout completoDatos={completoDatos}/>)
	 
    }
        </div>
    )
}
 

 export default Checkout