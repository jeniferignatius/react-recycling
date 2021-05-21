import React, { useState, useEffect } from 'react'

import './ProductShowcase.css'
import like from '../../img/like.svg'
import connectApi from "../../services/connectApi"

export default function ProductShowcase() {

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

  return (
    <div className="main-container">
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
              </div>
              <strong> {product.likes} likes</strong>
              <p className="description">
                {product.description}
              </p>
              <p className="value">
                Value R$: {product.value}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  )
}