import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },

  {
    path: "/signup",
    element:<SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>
  },
  {
    path: "/checkout",
    element:<Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element:<ProductDetail></ProductDetail>
  },
  
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
