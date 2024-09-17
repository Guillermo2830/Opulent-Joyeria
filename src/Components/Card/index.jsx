import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import React from "react"

const Card = ({id, name, category, price, image, description}) => {

  const context = useContext(ShoppingCartContext)

  //Mostrar detalles del producto
  const showProduct = () => {
    context.openProductDetail()
    context.setProductToShow({id, name, category, price, image, description})
  }

  //Agregar productos al carrito
  const addProductsToCart = (event, productData) => {
      event.stopPropagation();

      //verifica si esta en el carrito
      const isInCart = context.cartProducts.some(product => product.id === id);

      if(isInCart) {
        //no se agrega de nuevo
        context.setCartProducts(
          context.cartProducts.map(product => 
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
          )
        );
      } else {
        // Si no está en el carrito, agrégalo con cantidad 1
        context.setCartProducts([...context.cartProducts, { ...productData, quantity: 1 }]);
      }
        
      context.setCount(context.count + 1)
      context.openChekOutSideMenu()
      context.closeProductDetail()
    
  }
   // Marcar si esta en el carrito o no
   const renderIcon = () => {
    const isInCart = context.cartProducts.some(product => product.id === id);
    return (
      <div onClick={ (event) => addProductsToCart(event, { id, name, image, price })} className="absolute top-0 right-0 flex justify-center items-center rounded-full  w-8 h-8 m-2 font-bold p-1"> 
        
        {isInCart ? (
          <CheckIcon className='w-full h-full text-green-500 rounded-xl'/>
        ) : (<PlusCircleIcon className='w-full h-full text-white' />  
        )}

      </div>
    )
   }

  
    return (

       <div className="bg-white cursor-pointer w-50 h-60" onClick={showProduct}>
          <figure className="relative mb-2 w-full h-4/5">
            <span  className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
            {renderIcon()}
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{name}</span>
            <span className="text-lg font-bold">{price}</span>
          </p>
       </div>
    )
}

export default Card