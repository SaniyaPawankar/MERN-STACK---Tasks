import React from 'react'
import Product from './Product'

const ProductTab = () => {
  return (
    <div className='flex flex-row'>
      <Product title="Phone" price="50,000" brand="Apple" color="White"/>
      <Product title="Laptop" price="1,00,000" brand="Lenevo" color="Black"/>
      <Product title="Watch" price="5,000" brand="Fastrack" color="Gray"/>
    </div>
  )
}

export default ProductTab
