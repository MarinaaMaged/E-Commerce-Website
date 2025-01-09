import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const shopContext = createContext();
const ShopContextProvider= (props)=>{

    const currency='L.E';
    const delivery_fee=10;
    const[search,setSearch]=useState('');
    const[showSearch,setShowSearch]=useState(false);
    const[cartItem,setCartItem]=useState({});
    const navigate=useNavigate();


    const addToCart= async (itemId,size)=>{

        if (!size){
            toast.error('Select Product\'s size!')
        }
        let cartData= structuredClone(cartItem);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;

            }else{
                cartData[itemId][size]=1;

            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItem(cartData)
        
    }
    const getCartCount=()=>{
         let total=0
         for (const items in cartItem){
            for(const item in cartItem[items]){
                try{
                     if (cartItem[items][item]>0){
                        total+= cartItem[items][item];

                     }
                }catch(error){

                }

            }

         }
         return total;
    }
    useEffect(()=>{

    },[cartItem])

    const updateQuantity = async (itemId,size,quantity)=>{
        let  cartData=structuredClone(cartItem);
        cartData[itemId][size]=quantity;
        setCartItem(cartData)
    }
    const getCartAmount=()=>{
        let totalAmount=0;
        for (const items in cartItem){
            let itemInfo=products.find((product)=>product._id===items);
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalAmount+=itemInfo.price * cartItem[items][item];

                    }
                }catch(error){

                }
            }
        }
        return totalAmount;

    }

    const value={
            products, currency,delivery_fee,search,setSearch,showSearch,setShowSearch,
            cartItem,addToCart, getCartCount,updateQuantity,getCartAmount,navigate

    }
    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;
