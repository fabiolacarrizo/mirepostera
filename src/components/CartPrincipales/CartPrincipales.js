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
      <li>Diamantina Tornasol</li>
      <li>Diamantina de colores</li>
      <li>Diamantina Neon</li>
      <li>Matizador Dorado</li>
      <li>Matizador Plateado</li>
      <li>Colorantes en Gel</li>
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
      <li>CMC</li>
      <li>Goma Xhantan</li>
      <li>Goma Guar</li>
      <li>Acido Citrico</li>
      <li>Sorbato de Potasio</li>
      <li>Caramelina</li>
      <li>Gelatina sin sabor</li>
      <li>Glucosa </li>
      <li>Glicerina</li>
    </ul>
   </p>
     </div>
</div>
</Link>

    </div>
)

}

export default CartPrincipales