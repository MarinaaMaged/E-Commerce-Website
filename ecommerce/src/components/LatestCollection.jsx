import React, { useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { shopContext } from '../context/ShopContextProvider'
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';

const LatestCollection =()=>{

    const {products}=useContext(shopContext);
    const[latestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{
            setLatestProducts(products.slice(0,10));
    },[])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST '} text2={'Collections'}></Title>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> Your ultimate guide</p>
            </div>

            {/* products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                }

            </div>
        </div>
    )
}
export default LatestCollection