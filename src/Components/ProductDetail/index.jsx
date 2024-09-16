import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './style.css'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    if (!context) return null;
    const { isProductDetailOpen, productToShow, closeProductDetail } = context;
    return (
        
       <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
           <div className='flex justify-between items-center p-6'>
              <h2 className='font-medium text-xl'>Detalles</h2>
              <div>
                 <XMarkIcon onClick={ () => context.closeProductDetail()} className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
              </div>
           </div>

           {productToShow && (
                <>
                    <figure className='px-6'>
                        <img className='w-full h-full' src={productToShow.image} alt={productToShow.name} />
                    </figure>
                    <p className='flex flex-col p-6'>
                        <span className='font-medium text-2xl mb-2'>{productToShow.price}</span>
                        <span className='font-medium text-md'>{productToShow.name}</span>
                        <span className='font-light text-sm'>{productToShow.description}</span>
                    </p>
                </>
            )}
       </aside>
    )
}

export default ProductDetail;