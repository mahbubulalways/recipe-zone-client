import React from 'react';
import image1 from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import image3 from '../../../images/ramen1.jpg'
import image4 from '../../../images/ramen3.jpg'
import Swal from 'sweetalert2';
const Order = () => {
    const handleConfirm=()=>{
        Swal.fire({
            icon: 'success',
            title: 'Order Confirmed Successfully',
           
            
          })
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center w-[80%] mx-auto py-16 gap-10'>
           
            <div >
                <div className='flex'>
                <img className='w-2/4' src={image1} alt="" />
                <img className='w-2/4' src={image2} alt="" />
                </div>
                <div className='flex'>
               <img className='w-2/4' src={image3} alt="" />
                <img className='w-2/4' src={image4} alt="" />
               </div>
            </div>
            <div>
                <h1 className='text-3xl font-serif mb-10'>Click Confirm Order to confirm the order</h1>
                <button onClick={handleConfirm} className='bg-red-600 text-white px-3 py-2 rounded-md text-lg'>Confirm Order</button>
            </div>
        </div>
    );
};

export default Order;