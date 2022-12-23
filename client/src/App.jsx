import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Resetpassword from "./pages/Reset1";
import Confirmpassword from "./pages/Confirmpass";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'



const App = () => {
  const user = false
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:category' element={<ProductList/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/reset/' element={<Resetpassword/>} />
        <Route path='/newP/:userId/:token' element={<Confirmpassword />} />
        {/* <Route path='/pass' element={<Confirmpassword/>} /> */}
        <Route path='/login' element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to ="/" replace /> : <Register />}  />
      </Routes>
    </Router>
  )
};

export default App;

