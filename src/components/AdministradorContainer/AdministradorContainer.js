import React, { useState } from 'react'
import './AdministradorContainer.css'
import AddProductsContainer from '../AddProductsContainer/AddProductsContainer'
import ListProductEdit from '../ListProductEdit/ListProductEdit'
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
import ItemOrderContainer from '../ItemOrderContainer/ItemOrderContainer';
import PreguntasEditContainer from '../PreguntasEditContainer/PreguntasEditContainer';
import RecetasEditContainer from '../RecetasEditContainer/RecetasEditContainer'


const AdministradorContainer= () => {
  const [listaProd, setListaProd]= useState(false)
  const [lgShow, setLgShow] = useState(false);
  const [ListOrden, setListOrden] = useState(false);
  const [recetasedit, setrecetasEdit] = useState(false);
  const [preguntasEdit, setpreguntasEdit] = useState(false);



  return (
    <div className='container-panel'>
   

   <div  >
   <button className='admin-button' onClick={()=>(setListaProd(!listaProd) || setListOrden(false) || setLgShow(false) || setrecetasEdit(false) || setpreguntasEdit(false) )}>Lista de Productos</button>

  <button   className='admin-button'  onClick={() => setLgShow(!lgShow) || setListaProd(false) || setListOrden(false) || setrecetasEdit(false) || setpreguntasEdit(false)}>Agregar Productos</button>

  <button className='admin-button' onClick={()=>(setListOrden(!ListOrden) || setListaProd(false) || setLgShow(false) || setrecetasEdit(false) || setpreguntasEdit(false) )}>Ordenes de compra</button>

  <button className='admin-button' onClick={()=>(setrecetasEdit(!recetasedit) || setListaProd(false) || setLgShow(false) || setListOrden(false) || setpreguntasEdit(false) )}>Recetas</button>

  <button   className='admin-button'  onClick={() => setpreguntasEdit(!preguntasEdit) || setListaProd(false) || setLgShow(false) || setListOrden(false) || setrecetasEdit(false)}>Preguntas Frecuentes</button>
   </div>

{ listaProd ? <ListProductEdit></ListProductEdit> : null }

{ListOrden ? <ItemOrderContainer></ItemOrderContainer> : null}

{lgShow ? <AddProductsContainer></AddProductsContainer> : null}

{preguntasEdit ? <PreguntasEditContainer></PreguntasEditContainer> : null} 

{recetasedit ? <RecetasEditContainer></RecetasEditContainer> : null}

    </div>

    
  )
}

export default AdministradorContainer