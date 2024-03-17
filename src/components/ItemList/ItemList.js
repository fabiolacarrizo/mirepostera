import Item from '../Item/Item'
import './ItemList.css' 
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { useState } from 'react'

const ItemList= ({products})=>{
  const [search, setSearch] = useState("")
 

const searcher= (e) =>{
  setSearch(e.target.value)
  console.log(e.target.value);
}

let results =[]
if(!search){
  results = products
}else{
 results=products.filter((dato) =>
  dato.name.toLowerCase().includes(search.toLocaleLowerCase())  )
}


return(
    <div> 
          <div className='buscador-principal'>
 <input value={search} onChange={searcher} type='text' placeholder="BUSCAR" className="form-control"></input>
    </div>   

<div></div>
    <div className='card_itemList '>
     {results.map(prod => <Item key={prod.id} {...prod}/>) } 
    </div>


    </div>
)
}

export default ItemList
