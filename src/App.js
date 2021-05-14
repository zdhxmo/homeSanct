import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import axios from 'axios'
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(error => alert('error!'))
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* login page */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* checkout page */}
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* home page */}
          <Route path="/">
            <Header />
            <Home />
            <div className="product__grid">
              {products.map((product) => (
                <Product
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              ))}
            </div>
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
