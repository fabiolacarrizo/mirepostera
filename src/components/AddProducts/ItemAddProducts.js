import './ItemAddProducts.css'
import { useState,createContext} from 'react'
import Swal from 'sweetalert2'
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../service/firebase";
import { v4 } from "uuid";

export const FormAddProduct =createContext({
   name:"",
   code:"",
   description:"",
   stockbox:"",
   boxcont:"",
   boxdescription:"",
   price:"",
   category:"",
   costo:"",
   img:"",
   visible:"",
   cantidadxCaja:"",
   priceCaja:"",
 })
 
 
 const ItemAddProducts = ({completoDatos})=>{
  const [imageUpload, setImageUpload] = useState(null);
   const [name, setName] = useState("");
     const [code, setCode] = useState("");
     const [description, setDescription] = useState("");
     const [stockbox, setStockbox] = useState("");
     const [boxcont, setBoxcont] = useState("");
     const [price, setPrice] = useState("");
     const [category, setCategory]= useState("");
     const [costo, setCosto]= useState("");
     const [img, setImg]= useState("");
     const [visible, setVisible]= useState("publico");
     const [priceCaja, setPriceCaja] = useState("");
     const [cantidadxCaja, setCantidadxCaja] = useState ("");


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
   


 const submit = (e) => {
     e.preventDefault ();
     if ( !code  || !price || !category || !boxcont  )
         {
             return(
                 Swal.fire('Completa los datos porfavor') 
             )
         }
 
     else { completoDatos(
         name,
         code,
         description,
         stockbox,
         boxcont,
         price,
         category,
         costo,
         img,
         visible,
         cantidadxCaja,
         priceCaja
     )
       return(
         Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Los datos Fueron cargados',
           showConfirmButton: false,
           timer: 1500
         })
       )
 
    
     }
     }



   return(
   <div  className='container-itemaddproduct'>
 
 <div className='cart-cargaimg'>
     <input 
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />
      <button className='button1' onClick={uploadFile}> Upload Image</button>

      <img src={img}></img>
 </div>


<form className="cart-agregarproductos">

     <h2 className='titulo'>Agregar Producto</h2>

 <div className='cart-cargadato'> <label>Imagen Url:</label>  
 <input value={img} onChange={(e) => setImg(e.target.value)} placeholder='Url Imagen' type='text'></input> </div>  

 <div className='cart-cargadato'> <label>Nombre: </label>  
 <input value={name} onChange={(e) => setName(e.target.value)} type='text' ></input> </div>  

 <div className='cart-cargadatopublico'> <label>visible </label>  
 <input value={visible} onChange={(e) => setVisible(e.target.value)} type='text' ></input> </div>  

 <div className='cart-cargadato'> <label>Costo: USD$:</label>  
 <input value={costo} onChange={(e) => setCosto(e.target.value)} placeholder='' type='number'></input> </div>  

 <div className='cart-cargadato'> <label><span style={{color:'red',fontSize:20}}>*</span> Codigo: DQ</label> 
  <input value={code} onChange={(e) => setCode(e.target.value)} type='text'></input> </div> 

 <div className='cart-cargadato'> <label>Descripcion: </label> 
  <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Ej: analogico, sumergible, elastizado' type='text'></input> </div>  

 <div className='cart-cargadato'> <label> <span style={{color:'red',fontSize:20}}>*</span> Categoria: </label> 
 <select name='category'  onChange={(e) => setCategory(e.target.value)}>
 <option default> ---- Select Category ---- </option>
    <option value='esenciasysabores' name='category'>Esencias y Sabores</option>
    <option value='reposteriaydecoracion' name='category'>Reposteria y Decoracion</option>
    <option value='materiasprimas' name='category'>Materias Primas</option>

 </select>
  </div>  


 <div className='cart-cargadato'> <label><span style={{color:'red',fontSize:20}}>*</span> Stock Cajas:</label> 
  <input value={stockbox} onChange={(e) => setStockbox(e.target.value)} type='number'></input></div>  

  <h5 className='h5-edit'>Caja:</h5>

<div className='cart-cargadato'> <label>Precio De Venta: USD$: </label> 
 <input value={cantidadxCaja} onChange={(e) => setCantidadxCaja(e.target.value)} type='number'></input> </div>  

<div className='cart-cargadato'> <label><span style={{color:'red', fontSize:20}}>*</span> CANTIDAD:</label>  
<input value={priceCaja} onChange={(e) => setPriceCaja(e.target.value)} type='number'></input> </div>  



 <h5 className='h5-edit'>Bulto:</h5>

 <div className='cart-cargadato'> <label><span style={{color:'red', fontSize:20}}>*</span> Precio De Venta: USD$:</label>  
 <input value={price} onChange={(e) => setPrice(e.target.value)} type='number'></input> </div>  

 <div className='cart-cargadato'> <label>Unidades x Bulto: </label> 
  <input value={boxcont} onChange={(e) => setBoxcont(e.target.value)} type='number'></input> </div>  




 <button className='button1' onClick = {submit}> Confirmar Datos</button>

</form>

    </div>
    )}

export default ItemAddProducts