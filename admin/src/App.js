// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import PrivateLayout from "./components/Layout/PrivateLayout"
import PublicLayout from "./components/Layout/PublicLayout"

function App() {

  const admin = true

  return (
    <Router>
      { admin && (
        <>
            <Routes>
              <Route element={<PrivateLayout />} >
                <Route path="/" element={<Home />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/users" element={<UserList />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/user/:userId" element={<User />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/newUser" element={<NewUser />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/products" element={<ProductList />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/product/:productId" element={<Product />} />
              </Route>
              <Route element={<PrivateLayout />} >
                <Route path="/newproduct" element={<NewProduct />} />
              </Route>
              <Route element={<PublicLayout />} >
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
        </>
      )}
    </Router>
  );
}

export default App;