import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import React, { createContext, useEffect, useState } from "react";
import Orders from './Component/Orders/Orders';
import NotFound from './Component/NotFound/NotFound';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddProduct from './Component/AddProduct/AddProduct';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUSer] = useState({})

  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:5055/allProdct')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUSer]}>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home product={product}></Home>
          </Route>
          <Route path="/home">
            <Home product={product}></Home>
          </Route>
          <PrivateRoute path="/orders/:productId">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin/manage">
            <Admin product={product}></Admin>
          </PrivateRoute>
          <PrivateRoute path="/admin/add">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
