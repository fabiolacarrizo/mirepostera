import { useEffect, useState, createContext } from 'react'
import './FormCheckout.css'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



export const FormData = createContext({
  name:"",
  tlf:"",
  email:"",
  checkEmail:"",
  direction:"",
  directionNumber:"",
  cp:"",
  location:"",
  province:"",
  comment:"",
})


const FormCheckout = ({completoDatos})=>{

  const [name, setName] = useState("");
    const [tlf, setTlf] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [direction, setDirection] = useState("");
    const [directionNumber, setDirectionNumber] = useState("");
    const [cp, setCp] = useState("");
    const [location, setLocation] = useState("");
    const [province, setProvince] = useState("");
    const [comment, setComment] = useState ("");


const submit = (e) => {
    e.preventDefault ();
    if (!name || !tlf || !email || !checkEmail || !direction || !direction || !directionNumber || !cp || !location || !province || !comment )
        {
            return(
                Swal.fire('Completa tus datos porfavor') 
            )
        }
        else if (email != checkEmail && email && checkEmail) {
          return(
            Swal.fire('Los email no coinciden')
          )
    }

    else { completoDatos(
        name,
        tlf,
        email,
        checkEmail,
        direction,
        directionNumber,
        cp,
        location,
        province,
        comment,
    )
      return(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tus datos Fueron cargados',
          showConfirmButton: false,
          timer: 1500
        })
      )

   
    }
    }


    return(
        <div className='form-container'>
<form>
<div className='formCheckout'>

  <div  className='datosEnvio'>
<h4>Cliente</h4>
<p>  <label>Nombre y Apellido</label>
 <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nombre'  required></input>

 <label>Telefono</label> 
<input value={tlf} onChange={(e) => setTlf(e.target.value)} type='number' placeholder='TLF'  required></input></p> 

<p>  <label>Correo</label> 
<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Correo'  required></input>

  <label> Confirmar Correo</label> 
<input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type='email' placeholder='Correo'  required></input></p>
</div>

<div className='datosEnvio' >

<h4>Datos para Envio</h4>

<p>  <label>Domicilio</label>
 <input value={direction} onChange={(e) => setDirection(e.target.value)} type='text' placeholder='Domicilio'  required></input> 
 <label>Nro</label> <input value={directionNumber} onChange={(e) => setDirectionNumber(e.target.value)} type='Number' placeholder='Altura'  required style={{width:80}}></input>

 <label>CP</label>
 <input value={cp} onChange={(e) => setCp(e.target.value)} type='number' placeholder='CP' required style={{width:80}}></input></p>

 <p>  <label>Localidad</label>
 <input value={location} onChange={(e) => setLocation(e.target.value)} type='text' placeholder='Localidad'  required></input>

  <label>Provincia</label>
 <input value={province} onChange={(e) => setProvince(e.target.value)} type='text' placeholder='Provincia'  required></input></p>


<label>Transporte:</label>
<p> <textarea className='cart-textarea' value={comment} onChange={(e) => setComment(e.target.value)} name="comentarios" placeholder="Indiquenos aca si el pedido sera enviado por un transporte y el nombre del mismo, tenga en cuenta que el costo del envio es a cargo del comprador. ¡Gracias!" id="" rows="2" required></textarea></p>
 
<button className='button1' onClick = {submit}><span>Confirmar Datos</span> </button>
 </div> 

</div>


</form>  
        </div>
    )
}

export default FormCheckout