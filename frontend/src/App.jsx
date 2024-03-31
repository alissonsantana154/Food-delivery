import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSigup from './Pages/LoginSigup'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men"/>} />
        <Route path="/Womens" element={<ShopCategory category="Women" />} />
        <Route path="/kids" element={<ShopCategory category="kids"/>} />
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<LoginSigup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
