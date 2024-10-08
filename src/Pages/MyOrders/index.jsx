import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout"
import OrdersCard from '../../Components/OrdersCard'


function MyOrders () {
  const context = useContext(ShoppingCartContext);
  
  
    return (
    <Layout>
      <div className='w-80 flex items-center relative justify-center'>
        <h1 className='font-medium text-xl mb-4'>Mis Ordenes</h1>
      </div>
      
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
           date={order.date}
           totalPrice={order.totalPrice}
           totalProducts={order.totalProducts}
           />
          </Link>
        ))
      }
      
    </Layout>
    )
  }
  
  export default MyOrders