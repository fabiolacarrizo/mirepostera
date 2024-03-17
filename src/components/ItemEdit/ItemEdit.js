import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit from '../Edit/Edit';



const ItemEdit =({ id, name, code, category, price, stockbox, img, description, data, priceCaja, cantidadxCaja})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    
const OnAddEdit = (quantity, precioVenta) =>{
   
    
            const productToAdd = {
                id,
                name,
                price,
                img,
                code,
                category,
                description,
                stockbox,
                priceCaja,
                cantidadxCaja,
                precioVenta
            }
        }


    return(
        <div>
   {name}
   {category}
   {code}
   {price}
   {priceCaja}
   <Button variant="primary" onAddEdit={OnAddEdit} name={name} onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Edit ></Edit>
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


        </div>
    )
}

export default ItemEdit