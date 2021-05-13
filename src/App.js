import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import axios from 'axios'
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(error => alert('error!'))

  }, [])

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* checkout page */}
          <Route exact path="/checkout">
            <Checkout />
          </Route>

          {/* home page */}
          <Route path="/">
            <Home />
            <div className="product__grid">
              {products.map((product) => (
                <Product
                  key={product.id}
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
