import './Footer.css'
import iconocorreo from '../../assets/img/iconocorreo.jpg'
import iconoinstagram from '../../assets/img/iconoinstagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import { Link } from 'react-router-dom'

const Footer =()=>{
    return(
        <div className='cart-footer'>

<ul>
    <li>RIF J-50445575-0 </li>
    <li>Guatire - Edo.Miranda</li>
    <li>Emprendimiento Mariann Mendoza</li>
    </ul>
    
<ul>
   <Link to={'/'}>  <li>Inicio</li></Link>
    <Link to={'/productos'}><li>Productos</li></Link>
   <Link to={'/contacto'}> <li>Contacto</li></Link>
</ul>

<ul className='iconos-redes'>
    <li> <a href='mailto:mirepostera@gmail.com' target='_blank'> <img src={iconocorreo}></img></a></li>
    <li> <a href='https://www.instagram.com/mirepostera?igsh=MTI3bHcxb2l2OWg1OA==' target='_blank'><img src={iconoinstagram}></img></a></li>
</ul>
        </div>
    )
}

export default Footer