import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import React from "react"

const Card = ({id, name, category, price, image, description}) => {

  const context = useContext(ShoppingCartContext)

  const showProduct = () => {
    context.openProductDetail()
    context.setProductToShow({id, name, category, price, image, description})
  }

  const addProductsToCart = (event, productData) => {
      event.stopPropagation()
      context.setCount(context.count + 1)
      context.setCartProducts([...context.cartProducts, productData])
      context.openChekOutSideMenu()
      context.closeProductDetail()
      console.log('cart', context.cartProducts)
  }

  
    return (

       <div className="bg-white cursor-pointer w-50 h-60" onClick={showProduct}>
          <figure className="relative mb-2 w-full h-4/5">
            <span  className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
            <div onClick={ (event) => addProductsToCart(event, { id, name, image, price, description })} className="absolute top-0 right-0 flex justify-center items-center rounded-full  w-8 h-8 m-2 font-bold p-1"> 
              <PlusCircleIcon className='w-full h-full text-white' />
            </div>
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{name}</span>
            <span className="text-lg font-bold">{price}</span>
          </p>
       </div>
    )
}

export default Card