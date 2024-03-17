import './CartContainer.css'
import envio from '../../assets/img/envio.png'
import delivery from '../../assets/img/delivery.png'
import chat from '../../assets/img/chat.png'
import buy from '../../assets/img/buy.png'
import arrow from '../../assets/img/arrow.png'
import portadatex from '../../assets/img/portadatex.png'
import portadacake1 from '../../assets/img/portadacake1.png'
import CartPrincipales from '../CartPrincipales/CartPrincipales'

const CartContainer = ()=>{
    return(

        <div >
 <div className="cart-containerinicio">

<div className='cart-portada'>  </div>

<CartPrincipales></CartPrincipales>

<h3>¿Como Trabajamos?</h3>

<div className='cart-comotrabajamos'>

<div className='item-comotrabajamos'>
<img src={buy}></img>
<h4>1. Haz tu Pedido</h4>
<p>Escoge los productos que necesitas y confirma la compra en el carrito.</p>
</div>

<img className='flecha' style={{width:100, height:100,}}  src={arrow}></img>

<div className='item-comotrabajamos'>
<img src={chat}></img>
<h4>2. Realiza tu Pago</h4>
<p>Nos comunicaremos contigo para coordinar el pago.</p>
</div>

<img className='flecha' style={{width:100, height:100,}}  src={arrow}></img>

<div className='item-comotrabajamos'>
<img src={envio}></img>
<h4>3. Coordinamos la Entrega</h4>
<p>Despues de tener todo confirmado enviamos tus productos.</p>
</div>

<img className='flecha' style={{width:100, height:100,}}  src={arrow}></img>

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