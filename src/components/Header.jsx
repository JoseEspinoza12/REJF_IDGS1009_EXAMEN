// src/components/Header.jsx
import React from 'react';

// Componente React (Función con argumentos `onLoadCategories`, `isLoading`)
const Header = ({ onLoadCategories, isLoading }) => {
    return (
        <header className="py-4 bg-light shadow-sm mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>Explora las Categorías de Comida</h1>
                <button 
                    id="categoriesBtn" 
                    className="btn btn-primary btn-lg"
                    onClick={onLoadCategories} // Función de React para manejar el clic
                    disabled={isLoading}
                >
                    {isLoading ? 'Cargando...' : 'Cargar Categorías'}
                </button>
            </div>
        </header>
    );
};

export default Header;