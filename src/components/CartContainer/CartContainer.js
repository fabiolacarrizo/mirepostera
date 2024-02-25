import './CartContainer.css'
import portadawe from '../../assets/img/portadawe.png'
import gelatina from '../../assets/img/gelatina.png'
import vainillahd2 from '../../assets/img/vainillahd2.jpg'
import gliter from '../../assets/img/gliter.png'
import envio from '../../assets/img/envio.png'
import delivery from '../../assets/img/delivery.png'
import chat from '../../assets/img/chat.png'
import buy from '../../assets/img/buy.png'
import arrow from '../../assets/img/arrow.png'

const CartContainer = ()=>{
    return(

        <div >
 <div className="cart-containerinicio">

        <img className='portada-img' src={portadawe}></img>

      


<div className='cart-categorias'>

   <div className='item-categoria'> <img src={vainillahd2}></img>
     <p>Esencias y Sabores</p>
   </div> 

   <div className='item-categoria'>
     <img src={gliter}></img>
     <p>Reposteria y Decoracion</p>
   </div>

   <div className='item-categoria'>
    <img src={gelatina}></img>
    <p>Materias Primas</p>
   </div>

</div>


<h3>¿Como Trabajamos?</h3>

<div className='cart-comotrabajamos'>

<div className='item-comotrabajamos'>
<img src={buy}></img>
<h4>1. Haz tu Pedido</h4>
<p>Escoge los productos que necesitas y confirma la compra en el carrito.</p>
</div>

<img style={{width:100, height:100,}}  src={arrow}></img>

<div className='item-comotrabajamos'>
<img src={chat}></img>
<h4>2. Respondemos</h4>
<p>Nos pondremos en contacto contigo.</p>
</div>

<img style={{width:100, height:100,}}  src={arrow}></img>

<div className='item-comotrabajamos'>
<img src={envio}></img>
<h4>3. Coordinamos la Entrega</h4>
<p>Despues de tener todo confirmado enviamos tus productos.</p>
</div>

<img style={{width:100, height:100,}}  src={arrow}></img>

<div className='item-comotrabajamos'>
<img src={delivery}></img>
<h4>4. Recibe tus Insumos</h4>
<p>Disfruta tu Compra y cuentanos como te fue con nuestros productos.</p>
</div>

</div>


        
</div>



        </div>
    )
}

export default CartContainer