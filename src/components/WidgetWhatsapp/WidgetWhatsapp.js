import './WidgetWhatsapp.css'
import whatsapp from '../../assets/img/whatsapp.png'
import 'animate.css';
 
const WidgetWhatsapp =()=>{

      
    return(
        <div className='icon_whatsapp animate__animated animate__backInLeft'>
       <a href='https://api.whatsapp.com/send?phone=5491126222492' target='_blank'>  <img src={whatsapp}></img>  </a>
        </div>
    )
}

export default WidgetWhatsapp