import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home/Home';
import Nav from './navbar/Nav';
import Login from './login/Login';
import Sign from './signup/Sign';
import Contact from './contact/Contact';
import About from './about/About';
import Cart from './cart/Cart'
import Detail from './productdetail/Detail';
import Footer from './footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from './checkout/Checkout';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Nav/>
   <ToastContainer position="top-right" autoClose={3000} />
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Detail/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
