import './Footer.css'
import iconocorreo from '../../assets/img/iconocorreo.jpg'
import iconoinstagram from '../../assets/img/iconoinstagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import { Link } from 'react-router-dom'

const Footer =()=>{
    return(
        <div className='cart-footer'>
<ul>
   <Link to={'/'}>  <li>Inicio</li></Link>
    <Link to={'/productos'}><li>Productos</li></Link>
   <Link to={'/contacto'}> <li>Contacto</li></Link>
</ul>

<ul className='iconos-redes'>
    <li> <img src={iconocorreo}></img></li>
    <li><img src={iconoinstagram}></img></li>
    <li><img src={whatsapp}></img></li>
</ul>
        </div>
    )
}

export default Footer