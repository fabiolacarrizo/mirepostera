import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase"
import logo2 from '../../assets/img/logo2.png'


const ItemDetailContainer = ()=>{

const [product, setProduct] = useState()
const [loading, setLoading] = useState(true)


const { productId } = useParams()
console.log(productId)

useEffect(() =>{

const docRef= doc(db, 'products', productId)

getDoc(docRef).then(response =>{
  console.log(response);
  const data = response.data()
  const productAdapted = {id: response.id, ...data}
  setProduct(productAdapted)
}). finally(() =>{
  setLoading(false)
})

}, [productId])

if(loading) {
  return(
    <div style={{position:"relative",  marginBottom:200}}>
    <div className="loding-logo"> <img style={{ width:150, height:100, position:"absolute"}} src={logo2} ></img> </div>
    <div  style={{marginTop:200,  width:200, height:200, color:'pink'}} className='spinner-border' role="status">  </div>
  </div>
  )}



return(
    <div className="detail-cart">
      <h1>Detalle del Producto</h1>
      <ItemDetail {...product} />
    </div>
)
}

export default ItemDetailContainer