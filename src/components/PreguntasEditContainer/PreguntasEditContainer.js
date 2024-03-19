import './PreguntasEditContainer.css'
import { useEffect, useState } from "react"
import { getDocs, collection, query, where, orderBy, doc, deleteDoc,limit,Timestamp} from 'firebase/firestore'
import { db } from "../../service/firebase"
import {  useParams, useNavigate  } from 'react-router-dom' 
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemAddPreguntas from '../ItemAddPreguntas/ItemAddPreguntas'
import logo2 from '../../assets/img/logo2.png'


const PreguntasEditContainer= ({ greeting})=>{
  const [tareas, setTareas] = useState([])
  const [loading, setLoading] =useState(true) 
  const [search, setSearch] = useState("")
  const navigate = useNavigate()   
  const {orderId} = useParams()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=>{
  setLoading(true)

const collectionRef = orderId 
? query (collection(db, 'preguntasfrecuentes'), where('category', '==', orderId))
: query (collection(db, 'preguntasfrecuentes'))


 getDocs(collectionRef ).then(response =>{
const productsAdapted = response.docs.map(doc =>{
  const data= doc.data()
  return {id : doc.id, ...data}
})

    setTareas(productsAdapted)
 }).finally(()=>{
setLoading(false)
 })
},[orderId])

const deleteProduct = async (id) => {
  const productDoc = doc(db, "preguntasfrecuentes", id)
  await deleteDoc(productDoc)
 }

 const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Elimina La Pregunta?',
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
  results = tareas
}else{
 results=tareas.filter((dato) =>
  dato.tipoproyecto.toLowerCase().includes(search.toLocaleLowerCase()) || 
  dato.name.toLowerCase().includes(search.toLocaleLowerCase())  )
}


  return (
<div>
     
    <div className='container-tareas' style={{marginTop:20, }}>

  <div className='container'> 

<ItemAddPreguntas></ItemAddPreguntas>

  <div> <input className='barra-buscar' value={search} onChange={searcher} type='text' placeholder="BUSCAR" ></input></div>   



      <div className='row'>
        <div className='col'>
        <div className="table-responsive">

          <table className='table table table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              { results.map( (tarea) => (
                <tr key={tarea.id}>
                  <td>{tarea.name}</td>
                  <td>{tarea.description}</td>
                  <td style={{textAlign:'center'}} >  <button  onClick={ () => { confirmDelete(tarea.id) } } className='botoneliminar'>X </button></td>
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


export default PreguntasEditContainer