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
    const [cp, setCp] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [comment, setComment] = useState ("");


const submit = (e) => {
    e.preventDefault ();
    if (!name || !tlf || !email || !checkEmail || !direction || !direction || !cp || !ciudad || !estado || !comment )
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
        cp,
        ciudad,
        estado,
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

<p>  <label>Direccion</label>
 <input value={direction} onChange={(e) => setDirection(e.target.value)} type='text' placeholder='Direccion'  required></input> 

 <label>CP</label>
 <input value={cp} onChange={(e) => setCp(e.target.value)} type='number' placeholder='CP' required style={{width:80}}></input></p>

 <p>  <label>Ciudad</label>
 <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} type='text' placeholder='Ciudad'  required></input>

  <label>Estado</label>
 <input value={estado} onChange={(e) => setEstado(e.target.value)} type='text' placeholder='Estado'  required></input></p>


<label>Forma de Envio:</label>
<p> <textarea className='cart-textarea' value={comment} onChange={(e) => setComment(e.target.value)} name="comentarios" placeholder="Indiquenos aca la modalidad de envio, tenga en cuenta que el costo del envio es a cargo del comprador en su totalidad. ¡Gracias!" id="" rows="2" required></textarea></p>
 
<button className='button1' onClick = {submit}><span>Confirmar Datos</span> </button>
 </div> 

</div>


</form>  
        </div>
    )
}

export default FormCheckout