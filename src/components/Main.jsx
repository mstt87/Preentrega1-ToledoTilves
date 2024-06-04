import React from 'react';

const Main = () => {
    const products = [
        { id: 1, name: 'Capitan America', imageUrl: '/public/funko-capitan.jpg', price: 25.99 },
        { id: 2, name: 'Iron Man', imageUrl: '/public/funko-iman.jpg', price: 20 },
        { id: 3, name: 'Mickey', imageUrl: '/public/funko-mickey.jpg', price: 49.50 },
        { id: 4, name: 'Spider Man', imageUrl: '/public/funko-spiderman.jpg', price: 30 },
    ];

    return (
        <div className="container mx-auto py-8">
            <img src="/public/banner.png" alt="Banner" className="w-full  mb-8 rounded-lg shadow-md" /> {/* Banner */}
            <h1 className="text-3xl font-bold mb-8 text-center">FUNKOS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-700">${product.price.toFixed(2)}</p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full m-4">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
