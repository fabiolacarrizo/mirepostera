import './PreguntasFrecuentes.css'
import ItemPreguntasList from '../ItemPreguntasList/ItemPreguntasList'
import logo2 from '../../assets/img/logo2.png'
import { getDocs, collection, query, where, orderBy, limit} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PreguntasFrecuentes =(props)=>{
    const [preguntasfrecuentes, setPreguntasFrecuentes] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] =useState(true) 

    useEffect(()=>{
        setLoading(true)
        
      const collectionRef = categoryId 
      ? query (collection(db, 'preguntasfrecuentes'), where('category', '==', categoryId) )
      : query( collection(db, 'preguntasfrecuentes'),limit(30))
    
    
       getDocs(collectionRef ).then(response =>{
      const productsAdapted = response.docs.map(doc =>{
        const data= doc.data()
         return {id : doc.id, ...data}
      })
         setPreguntasFrecuentes(productsAdapted)
       }).finally(()=>{
      setLoading(false)
       })
      },[categoryId])
    
    
      if(loading) {
        return(
          <div style={{position:"relative", marginBottom:200}}>
          <div className="loding-logo"> <img style={{ width:140, height:100, position:"absolute"}} src={logo2} ></img> </div>
          <div  style={{marginTop:200,  width:200, height:200, color:'pink'}} className='spinner-border' role="status">  </div>
        </div>
        )}
      
    return(
        <div className='container-preguntas'>
<h1>Preguntas Frecuentes</h1>
<ItemPreguntasList  preguntasfrecuentes={preguntasfrecuentes} />
        </div>
    )
}


export default PreguntasFrecuentes