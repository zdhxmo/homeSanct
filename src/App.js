import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import axios from 'axios'
import './App.css';
import Home from './components/Home';
import Product from './components/Product';

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
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
