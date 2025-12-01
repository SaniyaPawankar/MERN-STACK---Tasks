import React from 'react'
import Product1 from './Product1.jsx'

const ProductTab1 = () => {
  return (
    <div className='flex flex-row'>
      <Product1 title="Phone" price="50,000" brand="Apple" color="White"/>
      <Product1 title="Laptop" price="1,00,000" brand="Lenevo" color="Black"/>
      <Product1 title="Watch" price="5,000" brand="Fastrack" color="Gray"/>
      <Product1 title="Television" price="10,000"/>
    </div>
  )
}

export default ProductTab1
