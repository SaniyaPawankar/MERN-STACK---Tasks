import React from 'react'

const Product = (props) => {
    return (
        <div className='bg-orange-200 mx-auto text-black flex flex-col w-80 h-60 border border-black border-double my-10 text-center items-center justify-center rounded'>
            <h3 className='font-bold text-blue-800 text-3xl'>{props.title}</h3>
            <p> Price : {props.price}</p>
            <p> Brand : {props.brand}</p>
            <p> Color : {props.color}</p>
        </div>
    )
}

export default Product

