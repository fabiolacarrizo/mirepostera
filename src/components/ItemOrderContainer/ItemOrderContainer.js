import { useEffect, useState } from "react"
import './ItemOrderContainer.css'
import { getDocs, collection, query, where, orderBy, doc, deleteDoc,limit,Timestamp} from 'firebase/firestore'
import { db } from "../../service/firebase"
import {  useParams, useNavigate  } from 'react-router-dom' 
import Swal from 'sweetalert2'
import deleteprod from '../../assets/img/deleteprod.png'
import logo2 from '../../assets/img/logo2.png'
import moment from "moment"



const ItemOrderContainer= ({ greeting})=>{
  const [orders, setOrders] = useState([])
  const [loading, setLoading] =useState(true) 
  const [search, setSearch] = useState("")

  const navigate = useNavigate()   
  const {orderId} = useParams()


useEffect(()=>{
  setLoading(true)

  const collectionRef = orderId 
  ? query (collection(db, 'orders'), where('category', '==', orderId))
  : query (collection(db, 'orders'),orderBy('date', 'desc'))
  


 getDocs(collectionRef ).then(response =>{
const productsAdapted = response.docs.map(doc =>{
  const data= doc.data()
  return {id : doc.id, ...data}
})

    setOrders(productsAdapted)
 }).finally(()=>{
setLoading(false)
 })
},[orderId])

const deleteProduct = async (id) => {
  const productDoc = doc(db, "orders", id)
  await deleteDoc(productDoc)
 }

 const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Elimina La Orden?',
    text: "No puede revertir esta accion",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Si, quiero eliminar!'
  }).then((result) => {
    if (result.isConfirmed) { 
      //llamamos a la fcion para eliminar   
      deleteProduct(id)    
    //  navigate('/')           
      Swal.fire(
        'Eliminado!',
        'Orden Borrada',
        'success'
      )
    }
  })    
}

if(loading) {
return(
  <div style={{position:"relative", margin:100}}>
  <div className="loding-logo"> <img style={{ width:140, height:100, position:"absolute"}} src={logo2}></img> </div>
  <div  style={{marginTop:200,  width:200, height:200, color:'pink'}} className='spinner-border' role="status">  </div>
</div>
)}

//buscador
const searcher= (e) =>{
  setSearch(e.target.value)
  console.log(e.target.value);
}

let results =[]
if(!search){
  results = orders
}else{
 results=orders.filter((dato) =>
  dato.buyer.tlf.toLowerCase().includes(search.toLocaleLowerCase()) || 
  dato.buyer.name.toLowerCase().includes(search.toLocaleLowerCase())  )
}



/* botones paginacion
<button className="btn-paginacion" onClick={prevHandler}> prev </button>
<button className="btn-paginacion" onClick={next}> next</button>
  {orders.map(prod => <ItemOrderDetail key={prod.id} {...prod}/>) } 
*/
  return (
<div>
     
    <div className='container-order' style={{marginTop:20, }}>

  <div className='container'> 


  <h2>Ventas</h2>

  <div className='barra-buscar'>
    <input value={search} onChange={searcher} type='text' placeholder="BUSCAR: Nombre - Telefono" className="form-control"></input></div>   

      <div className='row'>
        <div className='col'>
        <div className="table-responsive">

          <table className='table table table-hover'>
            <thead>
              <tr>
                <th >Fecha</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Total Productos</th>
                <th>Productos</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              { results.map( (order) => (
                <tr key={order.id}>
                  <td >{moment(order.date).format('DD MMM YYYY hh:mm a')}</td>
                  <td>{order.buyer.name}</td>
                  <td>{order.buyer.tlf}</td>
                  <td>{order.totalproducts}</td> 
                  <td>{order.items.map((items)=>{return <div> Cantidad:{items.quantity} Precio: USD${items.precioVenta} SubTotal: USD$ {items.quantity * items.precioVenta}</div>} )}</td>
                  <td>USD${order.total}</td>
                  <td>  <button  onClick={ () => { confirmDelete(order.id) } } className='botoneliminar'><img src={deleteprod}></img></button></td>
                
                 </tr>    
              )) }
            </tbody>
  
          </table>
</div>



        </div>
      </div>
    </div>

    </div>
    </div>
  )
}


export default ItemOrderContainer