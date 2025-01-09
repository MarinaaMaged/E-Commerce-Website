import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer =()=>{
    return(
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Your ultimate guide
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'> Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>

                <div>
                <p className='text-xl font-medium mb-5'> Get in touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+20 1234567891</li>
                        </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className=' font-bold py-5 text-sm text-center'>All Rights Reserved @Shopify</p>
            </div>
        </div>
    )
}
export default Footer