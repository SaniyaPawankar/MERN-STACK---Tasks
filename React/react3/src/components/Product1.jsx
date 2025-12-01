import React from 'react'

const Product1 = ({title,price,brand="samsung",color="black"}) => {
    return (
        <div className='bg-teal-400 mx-auto text-black flex flex-col w-80 h-60 border border-black border-double my-10 text-center items-center justify-center rounded'>
            <h3 className='font-extrabold  text-3xl'>{title}</h3>
            <p className='font-mono'> Price : {price}</p>
            <p className='font-mono'> Brand : {brand}</p>
            <p className='font-mono'> Color : {color}</p>
        </div>
    )
}

export default Product1
