import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer';
import { HashRouter, Routes, Route,} from 'react-router-dom'
import Recetas from './components/Recetas/Recetas'
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes'
import Contacto from './components/Contacto/Contacto'
import Productos from './components/Productos/Productos';
import WidgetWhatsapp from './components/WidgetWhatsapp/WidgetWhatsapp';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <CartProvider>
  <NavBar></NavBar>
  <Routes>
  <Route path='/' element={<CartContainer></CartContainer>}></Route>
  <Route path='/productos' element={<Productos></Productos>}></Route>
  <Route path='/recetas' element={<Recetas></Recetas>}></Route>
  <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>
  <Route path='/contacto' element={<Contacto></Contacto>}></Route>
  <Route path= '/detail/:productId' element={<ItemDetailContainer/>}/> 
  <Route path='/cart' element={<Cart/>} > </Route>
  <Route path='/checkout' element={<Checkout/>}></Route>
 </Routes>
 <WidgetWhatsapp></WidgetWhatsapp>
  <Footer></Footer>
  </CartProvider>
  </HashRouter>
    </div>
  );
}

export default App;
