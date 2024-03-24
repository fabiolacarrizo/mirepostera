import './Recetas.css'
import ItemRecetaList from '../../components/ItemRecetaList/ItemRecetaList'
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where, orderBy, limit} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { Link, useParams } from 'react-router-dom'
    import logo2 from '../../assets/img/logo2.png'

const Recetas =(props)=>{
    const [recetas, setRecetas] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] =useState(true) 

    useEffect(()=>{
        setLoading(true)
        
      const collectionRef = categoryId 
      ? query (collection(db, 'recetas'), where('category', '==', categoryId) )
      : query( collection(db, 'recetas'),limit(30))
    
    
       getDocs(collectionRef ).then(response =>{
      const productsAdapted = response.docs.map(doc =>{
        const data= doc.data()
         return {id : doc.id, ...data}
      })
         setRecetas(productsAdapted)
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
        <div className='container-recetas'>

<h1>Recetas</h1>
<ItemRecetaList  recetas={recetas} />
        </div>
    )
}


export default Recetas
