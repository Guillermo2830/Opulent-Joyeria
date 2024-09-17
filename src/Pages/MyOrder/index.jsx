import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrder () {

  const context = useContext(ShoppingCartContext);
  
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  const currentOrder = context.order?.[Number(index)];

    return (
      <Layout>
        <div className='w-80 flex items-center relative justify-center'>
        <Link to='/my-orders' className='absolute left-0'>
        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>Mis Ordenes</h1>
      </div>
      
      <div className='flex flex-col w-80 mt-10'>
                {
                    currentOrder?.products?.map((product)  => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))
                  }
            </div>
     </Layout>
    )
  }
  
  export default MyOrder