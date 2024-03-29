import './CartPrincipales.css'
import gelatina from '../../assets/img/gelatina.png'
import vainillahd2 from '../../assets/img/vainillahd2.jpg'
import gliter from '../../assets/img/gliter.png'
import { Link } from 'react-router-dom'


const CartPrincipales =()=>{
return(
    <div className='carts-container'>

<Link to={'/category/esenciasysabores'}>
<div className='cart-p'>
    <div className='face front'>
<img src={vainillahd2}></img>
<h3>Esencias y Sabores</h3>
     </div>

     <div className='face back'>
   <h3>Esencias y Sabores</h3>
   <p>
    <ul>
      <li>Vainilla</li>
      <li>Sabores Artificiales</li>
      <li>24 Sabores Disponibles</li>
    </ul>
   </p>
     </div>
</div>
</Link>

<Link to={'/category/reposteriaydecoracion'}>
<div className='cart-p'>
    <div className='face front'>
<img src={gliter}></img>
<h3>Reposteria y Decoracion</h3>
     </div>

     <div className='face back'>
   <h3>Reposteria y Decoracion</h3>
   <p>
   <ul>
      <li>Gliter</li>
      <li>Fondant</li>
      <li></li>
    </ul>
   </p>
     </div>
</div>
</Link>

<Link to={'/category/materiasprimas'}>
<div className='cart-p'>
    <div className='face front'>
<img src={gelatina}></img>
<h3>Materias Primas</h3>
     </div>

     <div className='face back'>
   <h3>Materias Primas</h3>
   <p>
   <ul>
      <li>Acido Citrico</li>
      <li>Gelatina sin Sabor</li>
      <li>Goma xhantan</li>
      <li>Goma Guar</li>
      <li>Caramelina</li>
    </ul>
   </p>
     </div>
</div>
</Link>

    </div>
)

}

export default CartPrincipales