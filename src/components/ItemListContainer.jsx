import React, { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        // Simulación de una pequeña demora para mostrar el efecto de transición
        const timeout = setTimeout(() => {
            setShowGreeting(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="text-center mt-8">
            <h2 className={`text-2xl font-bold ${showGreeting ? 'fade-in' : ''}`}>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
