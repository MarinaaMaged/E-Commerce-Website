import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title';

const About=()=>{
  return(
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT '} text2={'US'}/>

        </div>
        <div className='my-10 flex flex-col md:flex-row gap-4'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Shopify is your blend of fashion, trends and everything you can ever want. Our platform is where customers can easily discover, explore and purchase wide range of products from the comfort </p>
          <p>Enjoy your shopping with us! We are here to provide you with the ultimate experience of fashion!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Shopify is to empower customers with elegance, choice and everything they admire</p>
        </div>
        </div>
        <div className='text-2xl py-4'>
          <Title text1={'Why '} text2={'Shopify?'}/>
          <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
              <p> we select and ensure that each product meets the best in the town</p>
          </div>

        </div>        
    </div>
    
  )
}

export default About 