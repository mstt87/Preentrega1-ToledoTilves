import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/public/logo1.png" alt="Logo" className="h-24 w-auto mr-2" /> {/* Agregando el logo */}
                    <div className="text-white text-2xl font-bold">
                        <a href="/">E-Shop</a>
                    </div>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a 
                            href="/" 
                            className="text-white text-lg hover:text-gray-300 hover:underline"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/products" 
                            className="text-white text-lg hover:text-gray-300 hover:underline"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/about" 
                            className="text-white text-lg hover:text-gray-300 hover:underline"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/contact" 
                            className="text-white text-lg hover:text-gray-300 hover:underline"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
