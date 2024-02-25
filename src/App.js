import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
  <CartContainer></CartContainer>
  <Footer></Footer>
    </div>
  );
}

export default App;
