import ItemReceta from '../ItemReceta/ItemReceta'
import './ItemRecetaList.css' 
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { useState } from 'react'

const ItemRecetaList= ({recetas})=>{
 

return(
    <div> 
           

<div></div>
    <div className='card_itemRecetaList '>
    {recetas.map(prod => <ItemReceta key={prod.id} {...prod}/>)}
    </div>


    </div>
)
}

export default ItemRecetaList
