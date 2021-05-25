import React, { useState, useEffect } from 'react'

import './ProductShowcase.css'
import like from '../../img/like.svg'
import connectApi from "../../services/connectApi"
import Basket from './Cart';

export default function ProductShowcase(props) {

  const [countLikesUser, setCountLikesUser] = useState(0)
  const [productList, setProductList] = useState([])
  const [clientId] = useState(0)

  useEffect(() => {

  }, [productList])

  useEffect(() => {
    loadProducts()
  }, [clientId])

  async function loadProducts() {
    const request = await connectApi.get('/product')
    setProductList(request.data)
  }

  function handleAddLike(product) {
    product.likes++
    setCountLikesUser(countLikesUser + 1)
  }

  //const { onAdd } = props;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="main-container">
      <div className="row">
        <div className="col-6">
      <ul>
        {productList.map(product => (
          <li key={product._id} >
            <footer>
              <strong> {product.name}</strong>
            </footer>
            <img src={product.url} alt="product_name" />
            <footer className="footer">
              <div className='actions'>
                <button type="button" onClick={() => { handleAddLike(product) }}>
                  <img src={like} alt="" />
                </button>
          
                <button className="info float-right" onClick={() => { onAdd(product) }}>Add to cart</button>

              </div>
              <strong> {product.likes} likes</strong>
              <p className="description">
                {product.description}
              </p>
              <p className="value">
                Value €: {product.value}
              </p>
              
            </footer>
          </li>
        ))}
      </ul>
    </div>
    <div className="col">
    <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
    </div>
    </div>
    </div>
  )
}