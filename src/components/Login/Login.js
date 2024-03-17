import FormLogin from '../FormLogin/FormLogin'
import './Login.css'
import { useState } from 'react'
import UserView from '../UserView/UserView'
import AdministradorContainer from '../AdministradorContainer/AdministradorContainer'
import { app } from '../../service/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import UserContainer from '../UserContainer/UserContainer'

const firestore = getFirestore();


const auth = getAuth(app)



const Login =()=>{
const [user, setUser]= useState(null);

async function getRol(uid){

const docuRef = doc(firestore, `usuarios/${uid}`);
const docuCifrada = await getDoc (docuRef);
const infoFinal = docuCifrada.data().rol;
return infoFinal;

}



onAuthStateChanged(auth, (usuarioFirebase) =>{
    if (usuarioFirebase) {
      
        getRol(usuarioFirebase.uid).then((rol)=>{
            const userData={
            uid:usuarioFirebase.uid,
            email:usuarioFirebase.email,
            rol:usuarioFirebase.rol,
            name:usuarioFirebase.name,
           
        };
          setUser(userData);
          
        });
      
    } else {
        setUser(null)
    }
})

    return(
        <div className="container-login">

{user ? <UserContainer user={user}></UserContainer> : <FormLogin></FormLogin>} 

        </div>
    )
}


export default Login