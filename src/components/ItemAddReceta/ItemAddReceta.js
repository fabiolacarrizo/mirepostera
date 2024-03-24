import './ItemAddReceta.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import Swal from 'sweetalert2'
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import { storage } from "../../service/firebase";
  import { v4 } from "uuid";
 
const ItemAddReceta = () => {
  const [ img, setImg ] = useState('')
  const [ name, setName ] = useState('')
  const navigate = useNavigate()
  const [imageUpload, setImageUpload] = useState(null);

  const productsCollection = collection(db, "recetas")

  const store = async (e) => { 
    e.preventDefault()
     if (  !name || !img  )
    {
        return(
            Swal.fire('Completa los datos porfavor') 
        )
    }else {
        Swal.fire('Receta Agregada') 
    } 

    await addDoc( productsCollection, {  name: name, img: img } )
    //console.log(e.target[0].value)
  }

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

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
     <div className='cart-cargaimgrec'>
     <input 
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} />
      <button className='button1' onClick={uploadFile}> Upload Image</button>
      
 </div>  
                 <form onSubmit={store}>



 <div className='cart-cargadato'> <label>Imagen Url:</label>  
 <input value={img} onChange={(e) => setImg(e.target.value)} placeholder='Url Imagen' type='text'></input> </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    


                    <button type='submit' className='btn btn-primary'>Subir</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default ItemAddReceta