import AdministradorContainer from "../AdministradorContainer/AdministradorContainer"
import UserView from "../UserView/UserView"
import './UserContainer.css'
import { app } from '../../service/firebase'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(app)


const UserContainer=({user}) =>{
    return(
        <div className='container-user'>
            <button  className='button1'  onClick={()=> signOut(auth)}>Cerrar Sesion</button>

{user.rol === 'admin' || user.email === 'fabiolacanz@gmail.com' || user.email === '3pasteur20@gmail.com'
|| user.email === '274860324@qq.com' ? <AdministradorContainer></AdministradorContainer> : <UserView></UserView>  }


        </div>
    )
}

export default UserContainer