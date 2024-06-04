import React from 'react';

const CartWidget = () => {
    return (
        <div className="text-white text-lg">
            <a 
                href="/cart" 
                className="flex items-center hover:text-gray-500"
            >
                <i className="fas fa-shopping-cart mr-2"></i>
                
            </a>
        </div>
    );
};

export default CartWidget;
