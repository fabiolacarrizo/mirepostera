import './AddProductsContainer.css'
import ItemAddProducts from "../AddProducts/ItemAddProducts"
import Swal from "sweetalert2";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListProductEdit from '../ListProductEdit/ListProductEdit'
import ItemOrderContainer from '../ItemOrderContainer/ItemOrderContainer'



const AddProductsContainer =() =>{
	const [loading, setLoading] = useState(true)
    const [ListProd, setListProd] = useState(false);
    const [addProd, setAddProd] = useState(false);
    const [ListOrden, setListOrden] = useState(false);
    const [listDatos, setListDatos] =useState(false);
	const [personalData, setPersonalData] = useState(false)
    const navigate = useNavigate()
	const [datosCompra, setDatosCompra] = useState({}) 
	const [priceCaja, setPriceCaja] = useState("");
	const [cantidadxCaja, setCantidadxCaja] = useState ("");

const completoDatos = (name, code, description, stockbox, boxcont, price, category, costo,img,visible, priceCaja,  cantidadxCaja) =>{
	setDatosCompra({name, code, description, stockbox, boxcont,price, category, costo, img,visible, priceCaja, cantidadxCaja })
	setPersonalData(true)
}


	const product =  {
		name: datosCompra.name,
        code: datosCompra.code,
        description: datosCompra.description,
        stockbox: datosCompra.stockbox,
        boxcont: datosCompra.boxcont,
        price: datosCompra.price,
		category: datosCompra.category,
		costo: datosCompra.costo,
		img:datosCompra.img,
		visible:datosCompra.visible,
		priceCaja:datosCompra.priceCaja,
		cantidadxCaja:datosCompra.cantidadxCaja,
	} 

	const handleClick = async () => {
		try {
		const db = getFirestore();
		const productsCollection = collection(db, "products");
		addDoc(productsCollection, product).then(({ id }) => console.log(id));


        setTimeout(() => {
        }, 1000) 
        Swal.fire({
	title: "Producto Agregado",
	icon: "success",
	buttons: true,
	dangerMode: true,
})
}catch (error) {
	console.log(error)
} finally {
	setLoading(false)
}} 


	if(loading){
		<h4>Cargando...</h4>
	}


	if (ListProd === true) {
		return( <ListProductEdit></ListProductEdit>)
	   } else if (ListOrden === true) {
	   return( <ItemOrderContainer></ItemOrderContainer> )
	   }else if (addProd === true) {
		 return( <AddProductsContainer></AddProductsContainer> )
		 }
	 


    return(
        <div className="container-addproducts">


  
	 {	 personalData ? 	(<button className='boton-guardar button1' onClick={handleClick} >Guardar producto</button> )  : 
	  (<ItemAddProducts completoDatos={completoDatos}/>)
	 
    }
        </div>
    )
}
 

export default AddProductsContainer