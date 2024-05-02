import './ListProductEdit.css'
import { useEffect, useState } from "react"
import { getDocs, collection, query, where, orderBy, doc, deleteDoc,limit,startAt,documentSnapshots} from 'firebase/firestore'
import { db } from "../../service/firebase"
import {  useParams, useNavigate  } from 'react-router-dom' 
import ItemList from '../ItemList/ItemList'
import Swal from 'sweetalert2'
import { Link,NavLink } from 'react-router-dom'
import edit from '../../assets/img/edit.png'
import deleteprod from '../../assets/img/deleteprod.png'
import logo2 from '../../assets/img/logo2.png'



const ListProductEdit= ({ greeting})=>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] =useState(true) 
  const [search, setSearch] = useState("")
  const navigate = useNavigate()   
  const {categoryId, id} = useParams()
 


useEffect(()=>{
  setLoading(true)

const collectionRef = categoryId 
? query (collection(db, 'products'), where('category', '==', categoryId))
:  query (collection(db, 'products'),orderBy('category', 'asc'))

 getDocs(collectionRef ).then(response =>{
const productsAdapted = response.docs.map(doc =>{
  const data= doc.data()
  return {id : doc.id, ...data}
})

    setProducts(productsAdapted)
  
/*
return collectionRef.get().then((documentSnapshots) => {
  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
  console.log("last", lastVisible);
  // Construct a new query starting at this document,
  // get the next 25 cities.
  const next = db.collection("products")
          .orderBy('code', 'asc')
          .startAfter(lastVisible)
});
*/

 }).finally(()=>{
setLoading(false)
 })
},[categoryId])



const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id)
  await deleteDoc(productDoc)
//  navigate('/Listadeproductos')  
 }

 const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Elimina el producto?',
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
      //navigate('/Listadeproductos')           
      Swal.fire(
        'Eliminado!',
        'Producto Borrado',
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
  results = products
}else{
 results=products.filter((dato) =>
  dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  ||   dato.category.toLowerCase().includes(search.toLocaleLowerCase())
  )
}



  return (
    <div className='ListContainer-edit' >


  <div className='container'>
    


 <h3>Editor</h3>

 <div className='barra-buscar'>
       <input value={search} onChange={searcher} type='text' placeholder="BUSCAR: Nombre - Categoria " className="form-control"></input>
 </div>

      <div className='row'>
        <div className='col'>
        <div className="table-responsive">
          <table className='table table table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Precio Detal</th>
                <th>Precio Mayorista</th>
                <th>Visible</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              { results.map( (product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td> 
                  <td>USD$ {product.priceCaja}</td>
                  <td>USD$ {product.price}</td>
                  <td>{product.visible}</td>
                  <td> <Link to={`/edit/${product.id}`} className='botoneditar' > <img src={edit}></img> </Link> </td>
<td>  <button  onClick={ () => { confirmDelete(product.id) } } className='botoneliminar'><img src={deleteprod}></img></button></td>
                  
                </tr>                
              )) }
            </tbody> 

          </table>
         
</div>
        </div>
      </div>
    </div>

    </div>
  )
}


export default ListProductEdit