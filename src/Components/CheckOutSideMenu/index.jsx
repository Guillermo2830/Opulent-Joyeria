import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../Components/OrderCard';
import './style.css'

const CheckOutSideMenu = () => {

    const context = useContext(ShoppingCartContext);
    console.log('cart', context.cartProducts)

    
    return (
        
       <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-sidemenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
           <div className='flex justify-between items-center p-6'>
              <h2 className='font-medium text-xl'>Mis Ordenes</h2>
              <div>
                 <XMarkIcon onClick={ () => context.closeChekOutSideMenu()} className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
              </div>
           </div>
           <div className='p-6'>
                {context.cartProducts.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))
                )}
            </div>
  
       </aside>
    )
}

export default CheckOutSideMenu;