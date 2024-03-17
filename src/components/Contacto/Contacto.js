import { useState } from 'react'
import './Contacto.css'
import 'animate.css';

const Contacto = ()=>{
  const [name, setName]=useState("")
  const [tlf, setTlf]=useState("")
  const [email, setEmail]=useState("")
  const [city, setCity]=useState("")
  const [consulta, setConsulta]=useState("")


    const wMensaje= `https://api.whatsapp.com/send?phone=5491126222492&text=Hola!%20Tengo%20una%20consulta%20desde%20la%20web%20MI%20REPOSTERA%0ADatos:%0ANombre:%20${name}%0ATlf:%20${tlf}%0ACiudad:%20${city}%0AConsulta:%20${consulta}%0A`


    return(
        <div className="container-contacto">

<h2>Contacto</h2>
            <form className='cart-contactoform animate__animated animate__bounceInDown'>
            <p>
                <label>Nombre:</label>
                <input  value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nombre' required></input>
           
               <label>Telefono:</label>
                <input  value={tlf} onChange={(e) => setTlf(e.target.value)} type='number' placeholder='Telefono'required></input>
            </p>
            <p>
                
                 <label>Correo:</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Correo'></input>

                <label>Ciudad:</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='Ciudad' required></input>
            </p>
                <label>Consulta:</label>
               <textarea  value={consulta} onChange={(e) => setConsulta(e.target.value)}></textarea>
        
          <a  className='button1' href={wMensaje} target="_blank" > <span> Enviar Consulta</span> </a>

            </form>

        </div>
    )
}

export default Contacto