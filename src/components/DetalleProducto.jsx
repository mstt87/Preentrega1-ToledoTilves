import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'Capitan America', imageUrl: '/funko-capitan.jpg', price: 25.99, description: 'Figura de Capitán América Funko Pop.' },
    { id: 2, name: 'Iron Man', imageUrl: '/funko-iman.jpg', price: 20, description: 'Figura de Iron Man Funko Pop.' },
    { id: 3, name: 'Mickey', imageUrl: '/funko-mickey.jpg', price: 49.50, description: 'Figura de Mickey Mouse Funko Pop.' },
    { id: 4, name: 'Spider Man', imageUrl: '/funko-spiderman.jpg', price: 30, description: 'Figura de Spider-Man Funko Pop.' },
];

const DetalleProducto = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado.</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img src={product.imageUrl} alt={product.name} className="h-64 w-full object-cover md:w-64" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
                        <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
                        <p className="mt-2">{product.description}</p>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;
