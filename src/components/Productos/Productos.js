import './Productos.css'
import { getDocs, collection, query, where, orderBy, limit} from 'firebase/firestore'
import { db } from '../../service/firebase'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Productos =(props)=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true) 
    const {categoryId} = useParams()
    //.orderBy('price', "asc").limit(30)
    
      useEffect(()=>{
        setLoading(true)
        
      const collectionRef = categoryId 
      ? query (collection(db, 'products'), where('category', '==', categoryId) )
      : query( collection(db, 'products'),limit(30))
    
    
       getDocs(collectionRef ).then(response =>{
      const productsAdapted = response.docs.map(doc =>{
        const data= doc.data()
         return {id : doc.id, ...data}
      })
         setProducts(productsAdapted)
       }).finally(()=>{
      setLoading(false)
       })
      },[categoryId])
    
    
      if(loading) {
        return(
          <div style={{position:"relative", marginBottom:200}}>
          <div className="loding-logo"> <img style={{ width:100, height:100, position:"absolute"}} ></img> </div>
          <div  style={{marginTop:200,  width:200, height:200, color:'pink'}} className='spinner-border' role="status">  </div>
        </div>
        )}
      
    
    return(
        <div>
<h1>productos</h1>
<div className="table-responsive "> <ItemList  products={products} /></div>
        </div>
    )
}


export default Productos