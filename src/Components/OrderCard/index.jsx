import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({id, image, name, price, handleDelete, quantity}) => {

    const totalPrice = price * quantity;
    return(
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt="" />
                </figure>
                <p className='text-sm font-light'>{name}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{totalPrice}</p>
                <p className='text-lg font-medium'>x{quantity}</p>
                <XMarkIcon onClick={() => handleDelete(id) } className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
            </div>
        </div>
    )
}


export default OrderCard