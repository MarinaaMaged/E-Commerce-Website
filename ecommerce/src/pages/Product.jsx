import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/ShopContextProvider';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart} = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          {/* Thumbnail Images */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
                onClick={() => setImage(item)} // Clicking a thumbnail updates the main image
              />
            ))}
          </div>

          <div className='flex-1'>
            <img src={image} className='w-full' alt="Product Main" />
          </div>
        </div>
        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />

              </div>
              <p className='mt-5 text-3xl font-medium'>{productData.price }{currency}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description }</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-pink-300':''}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button  onClick={()=>addToCart(productData._id,size)}className='bg-black text-white px-8 py-4 text-sm active:bg-gray-500'>Add to Cart</button>
                  <hr  className='mt-8 sm:w-4/5'/>
                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original product</p>
                    <p>Easy return and exchange policy within 14 days</p>
                  </div>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
