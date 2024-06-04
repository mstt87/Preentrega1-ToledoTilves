import React, { useState } from 'react';

const CartWidget = () => {
    const [productCount, setProductCount] = useState(1); 

    return (
        <div className="relative text-white text-lg">
            <a 
                href="/cart" 
                className="flex items-center hover:text-gray-500"
            >
                <i className="fas fa-shopping-cart fa-2x mr-2"></i> {/* Aumentando el tamaño del ícono */}
                {productCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                        {productCount}
                    </span>
                )}
            </a>
        </div>
    );
};

export default CartWidget;
