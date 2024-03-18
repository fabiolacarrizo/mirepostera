import './ItemOrderDetail.css'


const ItemOrderDetail=(order)=>{
    return(
        <div className='cart-detailorder'> 
        <h3>Comprador</h3>
        <p>Nombre</p> {order.buyer.name}
        <h4>Datos de envio</h4>
        <h4>Compra</h4>
    </div>
    )
}

export default ItemOrderDetail