import ItemPreguntas from '../ItemPreguntas/ItemPreguntas'
import './ItemPreguntasList.css' 
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'
import { useState } from 'react'


const ItemPreguntasList= ({preguntasfrecuentes})=>{

 


return(
    <div> 
            

<div></div>
    <div className='card_itemPregList '>
     {preguntasfrecuentes.map(prod => <ItemPreguntas key={prod.id} {...prod}/>) } 
    </div>


    </div>
)
}

export default ItemPreguntasList
