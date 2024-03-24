import './ItemAddPreguntas.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import Swal from 'sweetalert2'

 
const ItemAddPreguntas = () => {
  const [ description, setDescription ] = useState('')
  const [ name, setName ] = useState('')
  const navigate = useNavigate()

  const productsCollection = collection(db, "preguntasfrecuentes")

  const store = async (e) => { 
    e.preventDefault()
     if ( !description  || !name  )
    {
        return(
            Swal.fire('Completa los datos porfavor') 
        )
    }else {
        Swal.fire('Pregunta Agregada') 
    } 

    await addDoc( productsCollection, { description: description, name: name,  } )
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

export default ItemAddPreguntas