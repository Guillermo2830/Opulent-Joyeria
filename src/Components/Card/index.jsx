import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import React from "react"

const Card = ({name, category, price, image}) => {

  const context = useContext(ShoppingCartContext)
  
    return (

       <div className="bg-white cursor-pointer w-50 h-60">
          <figure className="relative mb-2 w-full h-4/5">
            <span  className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
            <div className="absolute top-0 right-0 flex justify-center items-center rounded-full  w-8 h-8 m-2 font-bold p-1"> 
              <PlusCircleIcon onClick={ () => context.setCount(context.count + 1)}  className='w-full h-full text-white' />
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