import './ListProductEdit.css'
import { useEffect, useState } from "react"
import { getDocs, collection, query, where, orderBy, doc, deleteDoc,limit,startAt,documentSnapshots} from 'firebase/firestore'
import { db } from "../../service/firebase"
import {  useParams, useNavigate  } from 'react-router-dom' 
import ItemList from '../ItemList/ItemList'
import Swal from 'sweetalert2'
import { Link,NavLink } from 'react-router-dom'
import edit from '../../Assets/Img/edit.png'
import deleteprod from '../../Assets/Img/deleteprod.png'
import ItemOrderContainer from '../ItemOrderContainer/ItemOrderContainer'
import AddProductsContainer from '../AddProductsContainer/AddProductsContainer'
import logo2 from '../../Assets/Img/logo2.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit from '../Edit/Edit'
import { getDoc, updateDoc, } from "firebase/firestore"
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import { storage } from "../../service/firebase";
  import { v4 } from "uuid";


const ListProductEdit= ({ greeting})=>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] =useState(true) 
  const [search, setSearch] = useState("")
  const [ListProd, setListProd] = useState(false);
const [addProd, setAddProd] = useState(false);
const [ListOrden, setListOrden] = useState(false);
const [show, setShow] = useState(false);
const [product, setProduct] = useState()
const [name, setName] = useState("");
const [code, setCode] = useState("");
const [description, setDescription] = useState("");
const [stockbox, setStockbox] = useState("");
const [boxcont, setBoxcont] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory]= useState("");
const [costo, setCosto]= useState("");
const [img, setImg]= useState("");
const [visible, setVisible]= useState("");
const [priceCaja, setPriceCaja] = useState("");
const [cantidadxCaja, setCantidadxCaja] = useState ("");
const [imageUpload, setImageUpload] = useState(null);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  const navigate = useNavigate()   
  const {categoryId, id} = useParams()
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImg((prev) => [...prev, url]);
      });
    });
  };


  const update = async (e) => {
      e.preventDefault()
      const product = doc(db, "products", id)
      const data = {description: description,
           name: name,
           code : code, 
           stockbox:stockbox, 
           boxcont:boxcont,
           price: price,
           category: category,
           costo:costo, 
           img: img,
            visible:visible,
          priceCaja:priceCaja,
          cantidadxCaja:cantidadxCaja}
      await updateDoc(product, data)
      navigate(navigate(-1))
  }


  const getProductById = async (id) => {
      const product = await getDoc( doc(db, "products", id) )
      if(product.exists()) {
          //console.log(product.data())
          setDescription(product.data().description)    
          setName(product.data().name)
          setCode(product.data().code)
          setStockbox(product.data().stockbox)
          setBoxcont(product.data().boxcont)
          setPrice(product.data().price)
          setCategory(product.data().category)
          setCosto(product.data().costo)
          setImg(product.data().img)
          setVisible(product.data().visible)
          setPriceCaja(product.data().priceCaja)
          setCantidadxCaja(product.data().cantidadxCaja)
      }else{
          console.log('El producto no existe')
      }
  }

useEffect(()=>{
  setLoading(true)

const collectionRef = categoryId 
? query (collection(db, 'products'), where('category', '==', categoryId))
:  query (collection(db, 'products'),orderBy('code', 'asc'))

 getDocs(collectionRef ).then(response =>{
const productsAdapted = response.docs.map(doc =>{
  const data= doc.data()
  return {id : doc.id, ...data}
})

    setProducts(productsAdapted)
    getProductById(id)
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
    <div className="loding-logo"> <img style={{ width:100, height:100, position:"absolute"}} src={logo2}></img> </div>
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
  dato.code.toLowerCase().includes(search.toLocaleLowerCase())
  ||   dato.visible.toLowerCase().includes(search.toLocaleLowerCase())
  ||   dato.category.toLowerCase().includes(search.toLocaleLowerCase())
  )
}

//menu admi
if (ListProd === true) {
  return( <ListProductEdit></ListProductEdit>)
 } else if (ListOrden === true) {
 return( <ItemOrderContainer></ItemOrderContainer> )
 }else if (addProd === true) {
   return( <AddProductsContainer></AddProductsContainer> )
   }


  return (
    <div className='ListContainer-edit' >


  <div className='container'>
    

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Agregar Producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <AddProductsContainer></AddProductsContainer></Modal.Body>
      </Modal>


 <h3>Editor</h3>

 <div className='barra-buscar'>
       <input value={search} onChange={searcher} type='text' placeholder="BUSCAR: Codigo - Categoria - Publico o privado" className="form-control"></input>
 </div>

      <div className='row'>
        <div className='col'>
        <div className="table-responsive">
          <table className='table table table-hover'>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Categoria</th>
                <th>Costo</th>
                <th>Precio Caja</th>
                <th>Precio Bulto</th>
                <th>Visible</th>
                <th>Edición Rápida</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              { results.map( (product) => (
                <tr key={product.id}>
                  <td>DQ {product.code}</td>
                  <td>{product.category}</td> 
                  <td>{product.costo}</td>
                  <td>USD$ {product.priceCaja}</td>
                  <td>USD$ {product.price}</td>
                  <td>{product.visible}</td>
                  <td>    <Button variant="primary" onClick={()=>{handleShow(product)}} name={name}>
        Prueba(Edición rápida)
      </Button></td>
                  <td> <Link to={`/edit/${product.id}`} className='botoneditar' > <img src={edit}></img> </Link> </td>
<td>  <button  onClick={ () => { confirmDelete(product.id) } } className='botoneliminar'><img src={deleteprod}></img></button></td>
                  
                </tr>                
              )) }
            </tbody> 
            <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
       <div className='container-editarproductos'>
      
 <div className='cart-cargaimg'>
     <input 
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />
      <button className='button1' onClick={uploadFile}> Upload Image</button>

      <img src={img}></img>
 </div>
 
        <div className='container'>
        <div className='row'>
            <div className='col'>

                <h1>Editar Producto</h1>
                  <button  className="botonvolver" onClick={() => (navigate(-1)) }>Volver</button>

   <form className='container-edit'  method="post" >
     
  <div className='cart-cargadato'> 
                <label>Visible:</label>
<div onChange={(e) => setVisible(e.target.value)}>
        <input type="radio" value="publico" name="visible" /> Publico
        <input type="radio" value="privado" name="visible" />Privado
      </div>

                  </div>

 <div className='cart-cargadato'>
 <div className='cart-cargadato'> <label>Imagen Url: </label>  
 <input value={img} onChange={(e) => setImg(e.target.value)} placeholder='URL' type='text'></input> </div>  
 </div>

 <div className='cart-cargadato'> <label>Nombre: </label>  
 <input value={name} onChange={(e) => setName(e.target.value)} type='text'></input> 
  <label>Codigo:DQ</label> 
  <input value={code} onChange={(e) => setCode(e.target.value)} type='number'></input> </div> 
  
 <div className='cart-cargadato'> <label>Costo: USD$ </label>  
 <input value={costo} onChange={(e) => setCosto(e.target.value)} placeholder='costo' type='number'></input>  
 

  </div>  

<div className='cart-cargadato'> 
<label>Categoria:</label>
<div onChange={(e) => setCategory(e.target.value)}>
       <span><input type="radio" value="mujer" name="category" /> Mujer</span> 
        <input type="radio" value="hombre" name="category" />Hombre
        <input type="radio" value="infantil" name="category" /> Niños
        <input type="radio" value="digitales" name="category" />Digitales
        <input type="radio" value="ofertas" name="category" />Ofertas
        <input type="radio" value="varios" name="category" /> Varios
      </div>
 </div>


 <div className='cart-cargadato'>

<label>Descripcion: </label> 
  <input className='p-descripcion'  value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Ej: analogico, sumergible, elastizado' type='text'></input> </div>  

<div className='cart-cargadato'> 
 <label>Stock Cajas:</label> 
  <input value={stockbox} onChange={(e) => setStockbox(e.target.value)} type='number'></input>
</div>  


 <h5 className='h5-edit'>Cajas:</h5>
  <div className='cart-cargadato'>
<label>Precio: USD$</label> 
  <input  value={priceCaja} onChange={(e) => setPriceCaja(e.target.value)}type='text'></input>
  
  <label>Unidades por Caja: </label> 
  <input  value={cantidadxCaja} onChange={(e) => setCantidadxCaja(e.target.value)} type='text'></input> 
  
   </div> 

 <h5 className='h5-edit'>Bultos:</h5>

 <div className='cart-cargadato'> 

  <label>Precio de Venta: USD$</label>  
 <input value={price} onChange={(e) => setPrice(e.target.value)} type='number'></input>

   <label>Cantidad x Bulto: </label> 
  <input value={boxcont} onChange={(e) => setBoxcont(e.target.value)} type='number'></input> 


  
 </div>  

                    <button type='submit' onClick={update} className='btn btn-primary'>Actualizar</button>
                 </form>  


            </div>
        </div>
    </div>
     </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   

          </table>
         
</div>
        </div>
      </div>
    </div>

    </div>
  )
}


export default ListProductEdit