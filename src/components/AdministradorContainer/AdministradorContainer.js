import React, { useState } from 'react'
import './AdministradorContainer.css'
import AddProductsContainer from '../AddProductsContainer/AddProductsContainer'
import ListProductEdit from '../ListProductEdit/ListProductEdit'
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
import ItemOrderContainer from '../ItemOrderContainer/ItemOrderContainer';


const AdministradorContainer= () => {
  const [listaProd, setListaProd]= useState(false)
  const [lgShow, setLgShow] = useState(false);
  const [ListOrden, setListOrden] = useState(false);



  return (
    <div className='container-panel'>
   

   <div  >
   <button className='admin-button' onClick={()=>(setListaProd(!listaProd) || setListOrden(false) )}>Lista de Productos</button>
  <button   className='admin-button'  onClick={() => setLgShow(!lgShow)}>Agregar Productos</button>
<button className='admin-button' onClick={()=>(setListOrden(!ListOrden) || setListaProd(false) )}>Ordenes de compra</button>
   </div>

{ listaProd ? <ListProductEdit></ListProductEdit> : null }

{ListOrden ? <ItemOrderContainer></ItemOrderContainer> : null}

{lgShow ? <AddProductsContainer></AddProductsContainer> : null}

  

    </div>

    
  )
}

export default AdministradorContainer