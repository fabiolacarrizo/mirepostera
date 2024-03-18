import './Edit.css'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase"
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import { storage } from "../../service/firebase";
  import { v4 } from "uuid";

const Edit = ({}) => {
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

    const navigate = useNavigate()    
    const {id} = useParams()

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

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])


    return (
    
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
       <span><input type="radio" value="esenciasysabores" name="category" /> Esencias y Sabores</span> 
        <input type="radio" value="reposteriaydecoracion" name="category" />Reposteria y Decoracion
        <input type="radio" value="materiasprimas" name="category" /> Materias Primas
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
    )
}

export default Edit