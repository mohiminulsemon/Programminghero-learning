import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Shop from './components/Shop/Shop'
import Header from './components/Header/Header'
import Home from './components/Layout/Home'
import Order from './components/Order/Order'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductsLoader from './Loader/cartProductsLoader'
import Checkout from './components/Checkout/Checkout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        // loader: () => fetch('products.json')
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
