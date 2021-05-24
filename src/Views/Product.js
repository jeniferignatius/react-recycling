import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

import './Product.css'
//import mainpage from '../img/mainpage.png'
//import pedidos from '../img/mainpage.png'

export default function Product() {
  return (
    <header id='main-header'>
      <div className='header-content'>
        <Link to='/product' >
        <Button className='button' color="primary">Product page</Button> 
        </Link>
        <Link to='/product/product-add'>
        <Button className='button' color="primary">Add Product</Button>
        </Link>
      </div>
    </header>
  )
}