import './Footer.css'
import iconocorreo from '../../assets/img/iconocorreo.jpg'
import iconoinstagram from '../../assets/img/iconoinstagram.png'
import whatsapp from '../../assets/img/whatsapp.png'

const Footer =()=>{
    return(
        <div className='cart-footer'>
<ul>
    <li>Inicio</li>
    <li>Productos</li>
    <li>Contacto</li>
</ul>

<ul className='iconos-redes'>
    <li><img src={iconocorreo}></img></li>
    <li><img src={iconoinstagram}></img></li>
    <li><img src={whatsapp}></img></li>
</ul>
        </div>
    )
}

export default Footer