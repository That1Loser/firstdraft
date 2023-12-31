import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { PRODUCTS } from '../Products.js';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};



export const ShopContextProvider = (props) => {

    const [cartItems, setcartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        if (cartItems[itemId] !== 1) {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    };

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    const contextValue = { cartItems, addToCart, removeFromCart };
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

