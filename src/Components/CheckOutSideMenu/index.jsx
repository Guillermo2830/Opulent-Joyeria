import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../Components/OrderCard';
import {totalPrice} from '../../utils.js'
import './style.css'

const CheckOutSideMenu = () => {

    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
      const filteredProducts = context.cartProducts.filter(product => product.id != id)
      context.setCartProducts(filteredProducts)
    }
 
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
  
    
    return (
        
       <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-sidemenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
           <div className='flex justify-between items-center p-6'>
              <h2 className='font-medium text-xl'>Mis Ordenes</h2>
              <div>
                 <XMarkIcon onClick={ () => context.closeChekOutSideMenu()} className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
              </div>
           </div>
           <div className='p-6 overflow-y-scroll flex-1'>
                {context.cartProducts.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            handleDelete={handleDelete}
                            quantity={product.quantity}
                        />
                    ))
                )}
            </div>
            <div className='px-6 mb-6'>
               <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
               </p>
               <Link to={`/my-orders/${context.order.length}`}>
               <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
               </Link>
            </div>
       </aside>
    )
}

export default CheckOutSideMenu;