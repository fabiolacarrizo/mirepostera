import ItemAddReceta from '../ItemAddReceta/ItemAddReceta'
import './RecetasEditContainer.css'
import { useEffect, useState } from "react"
import { getDocs, collection, query, where, orderBy, doc, deleteDoc,limit,Timestamp} from 'firebase/firestore'
import { db } from "../../service/firebase"
import {  useParams, useNavigate  } from 'react-router-dom' 
import Swal from 'sweetalert2'
import logo2 from '../../assets/img/logo2.png'

const RecetasEditContainer =({ greeting})=>{
    const [tareas, setTareas] = useState([])
    const [loading, setLoading] =useState(true) 
    const [search, setSearch] = useState("")
    const navigate = useNavigate()   
    const {orderId} = useParams()


    useEffect(()=>{
        setLoading(true)
      
      const collectionRef = orderId 
      ? query (collection(db, 'recetas'), where('category', '==', orderId))
      : query (collection(db, 'recetas'))
      
      
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
        const productDoc = doc(db, "recetas", id)
        await deleteDoc(productDoc)
       }
      
       const confirmDelete = (id) => {
        Swal.fire({
          title: '¿Elimina La Receta?',
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
              'Eliminado!'
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
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())  )
      }
      

    return(
        <div>
<h1 className='titulo1'>Recetas Edicion</h1>

<ItemAddReceta></ItemAddReceta>

<div> <input className='barra-buscar' value={search} onChange={searcher} type='text' placeholder="BUSCAR" ></input></div>   



<div className='row'>
  <div className='col'>
  <div className="table-responsive">

    <table className='table table table-hover'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        { results.map( (tarea) => (
          <tr key={tarea.id}>
            <td className='descricionrec'>{tarea.name}</td>
            <td>Editar</td>
            <td style={{textAlign:'center'}} >  <button  onClick={ () => { confirmDelete(tarea.id) } } className='botoneliminar'>X </button></td>
          </tr>    
        )) }
      </tbody>

    </table>
</div>



  </div>
</div>
        </div>
    )
}


export default RecetasEditContainer