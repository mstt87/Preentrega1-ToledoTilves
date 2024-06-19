import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Capitan America', imageUrl: '/funko-capitan.jpg', price: 25.99 },
    { id: 2, name: 'Iron Man', imageUrl: '/funko-iman.jpg', price: 20 },
    { id: 3, name: 'Mickey', imageUrl: '/funko-mickey.jpg', price: 49.50 },
    { id: 4, name: 'Spider Man', imageUrl: '/funko-spiderman.jpg', price: 30 },
];

const Catalogo = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-700">${product.price.toFixed(2)}</p>
                            <Link to={`/products/${product.id}`} className="block mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Ver Detalle
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
