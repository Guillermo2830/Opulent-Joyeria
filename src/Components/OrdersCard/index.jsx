
import { ChevronRightIcon } from '@heroicons/react/16/solid';

const OrdersCard = ({date, totalPrice, totalProducts}) => {

    
    return(
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
           <div className='flex justify-between w-full'>

            <p className='flex flex-col'>
            <span className='font-light'>{date}</span>
            <span className='font-light'>{totalProducts} articulos</span>
            </p>
            <p className='flex items-center gap-2'>
            <span className='font-medium text-2xl'>${totalPrice}</span>
            <ChevronRightIcon className='w-6 h-6 text-black cursor-pointer'/>
            </p>
            
           </div>
        </div>
    )
}


export default OrdersCard