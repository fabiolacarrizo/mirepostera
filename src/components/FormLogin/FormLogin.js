import { async } from '@firebase/util';
import { useState } from 'react'
import './FormLogin.css'
import login from '../../assets/img/login.png'
import { getFirestore, doc, setDoc,  } from 'firebase/firestore';
import { app } from '../../service/firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(app)




const FormLogin =()=>{
const [isRegistrando, setIsRegistrando] = useState(false);

async function registrarUsuario(email, password,name, rol){
 const infoUsuario = await createUserWithEmailAndPassword(
    auth, email, password, name, rol
    ).then((usuarioFirebase) => {
         return usuarioFirebase;
    })
    
    const firestore = getFirestore();
    const docuRef = doc(firestore,`usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {correo: email, nombre: name, rol: rol})
}



function submitHandler(e) {
e.preventDefault();

const name = e.target.elements.name.value;
const email = e.target.elements.email.value;
const password = e.target.elements.password.value;
const rol = e.target.elements.rol.value;
console.log("submit", email, name, password, rol);

if(password.length < 6 ){
    alert('la contraseña debe tener minimo 6 caracteres ')
}

if (isRegistrando) {
    registrarUsuario(email, password, name, rol);
} else {
    signInWithEmailAndPassword(auth, email, password,rol,name)
}

}


return(
    <div>
        
  

<form className='form-login' onSubmit={submitHandler}> 

<img className='login-img' src={login}></img>
<h3>{ isRegistrando ? "Registrate" : "Iniciar Sesion"} </h3>

<p>  <input type='text' required placeholder='Nombre' id='name'></input></p>

<p>  <input type='email' required placeholder='Email' id='email'></input></p>

<p>  <input type='password'  required placeholder='Contraseña' id='password'></input></p>

 <p className='inputusuario'> <select name='rol' id='rol'>
    <option name='rol' value='usuario' >usuario</option>
    <option name='rol' value='admin' >Administrador</option>
    </select>   </p>



<p className='buttons-login'>
<button className='button1' type='submit'  >  { isRegistrando ? "Registrate" : "Iniciar Sesion"}</button>

<button className='button1' onClick={()=> setIsRegistrando(!isRegistrando)}>
    {isRegistrando ? "Ya Tengo Cuenta" : "Quiero Registrarme"}
</button>
</p>

</form>

    </div>
)    
}

export default FormLogin