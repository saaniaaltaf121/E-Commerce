// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../redux/hooks'; 

function Navbar({ onSearch }) {
   
    const cartCount = useAppSelector((state) => state.cart.items.length);

 

    return (
        <div className="pt-4 bg-white top-0 sticky z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">E-Commerce</h1>
                    <div className="lg:flex hidden w-full max-w-[500px] relative">
                        
                    
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                            <span className="ml-2 text-sm">Hello, Sign in</span>
                        </div>
                        <div className="relative">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8" />
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
                                {cartCount}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-200 pt-4'></div>
            </div>
        </div>
    );
}

export default Navbar;
