import React, { Component } from 'react'

import './ProductAdd.css'

import connectApi from '../../services/connectApi'

class ProductAdd extends Component {

  state = {
    idReference: '',
    name: '',
    description: '',
    value: '',
    url: '',
  }

  handleSubimit = async event => {

    event.preventDefault()

    const productObject = {
      idReference: +this.state.idReference,
      name: this.state.name,
      description: this.state.description,
      value: +this.state.value,
      url: this.state.url
    }

    await connectApi.post('/product', productObject)

    this.props.history.push('/')
  }

  handleChange = fromProduct => {
    this.setState({ [fromProduct.target.name]: fromProduct.target.value })
  }

  render() {
    return (
      <form id="add-product" onSubmit={this.handleSubimit}>
        <input
          type="number"
          name="idReference"
          placeholder="Product Code"
          onChange={this.handleChange}
          value={this.state.idReference}
        />

        <input
          type="text"
          name="name"
          placeholder="Name of the product"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="number"
          name="value"
          placeholder="Value"
          onChange={this.handleChange}
          value={this.state.value}
        />

        <input
          type="file"
          name="url"
          placeholder="Link for the image"
          onChange={this.handleChange}
          value={this.state.url}
        />

        <button type="submit">Add product</button>

        <img src={this.state.url} alt="" />
      </form>

    )
  }
}

export default ProductAdd