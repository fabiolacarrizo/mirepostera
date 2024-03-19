import './ItemAddReceta.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import Swal from 'sweetalert2'

 
const ItemAddReceta = () => {
  const [ description, setDescription ] = useState('')
  const [ name, setName ] = useState('')
  const [ tlf, setTlf ] = useState('')
  const [ tipoproyecto, setTipoProyecto ] = useState('')
  const navigate = useNavigate()

  const productsCollection = collection(db, "recetas")

  const store = async (e) => { 
    e.preventDefault()
     if ( !description  || !name || !tipoproyecto || !tlf  )
    {
        return(
            Swal.fire('Completa los datos porfavor') 
        )
    }else {
        Swal.fire('Receta Agregada') 
    } 

    await addDoc( productsCollection, { description: description, name: name, tlf: tlf, tipoproyecto: tipoproyecto } )
    //console.log(e.target[0].value)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
     
                 <form onSubmit={store}>
                   
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Telefono</label>
                        <input
                            value={tlf}
                            onChange={ (e) => setTlf(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Proyecto</label>
                        <input
                            value={tipoproyecto}
                            onChange={ (e)=> setTipoProyecto(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div> 
                     <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)} 
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