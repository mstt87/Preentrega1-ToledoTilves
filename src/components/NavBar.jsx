// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/public/logo1.png" alt="Logo" className="h-24 w-auto mr-2 rounded-full" />
                    <div className="text-white text-2xl font-bold">
                        <Link to="/">E-Shop</Link>
                    </div>
                </div>
                <div className="flex items-center space-x-8">
                    <ul className="flex space-x-10">
                        <li>
                            <Link to="/" className="text-white text-lg hover:text-gray-300 hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-white text-lg hover:text-gray-300 hover:underline">
                                Products
                            </Link>
                        </li>
                       
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
