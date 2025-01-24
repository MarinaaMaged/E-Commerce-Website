import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { shopContext } from '../context/ShopContextProvider'

const PlaceOrder=()=>{

  const {navigate}=useContext(shopContext);
  return(
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-xl my-3'>
          <Title text1={'Your '} text2={'Order'}/>
          <div className='flex gap-3'>
            <input className=' mb-3 border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
            <input className=' mb-3 border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
          </div>
          <input className=' mb-3 border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
          <input className='mb-3 border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
          

        </div>
        <input className='mb-3 border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number' />

      </div>
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
        <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'Pay on delivery'}/>

        </div>
        <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/orders')} className='bg-pink-300 text-white px-16 py-3 text-sm'> Place Order</button>

        </div>

      </div>
    </div>
  )
}

export default PlaceOrder