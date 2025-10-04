// src/components/CategoryCard.jsx
import React from 'react';
import { shortenDescription } from '../fetchCategories';

// Componente React (Función con argumento `category` y `onViewDetails`)
const CategoryCard = ({ category, onViewDetails }) => {
    // Desestructuración del objeto category
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = category;

    // Uso de función con argumentos para limitar la descripción
    const shortDescription = shortenDescription(strCategoryDescription);

    return (
        // Uso de clases de Bootstrap
        <div className="card h-100 shadow-sm">
            {/* Imágenes */}
            <img 
                src={strCategoryThumb} 
                className="card-img-top" 
                alt={`${strCategory} image`} 
                style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{strCategory}</h5>
                <p className="card-text flex-grow-1">{shortDescription}</p>
                
                <button 
                    className="btn btn-primary mt-3"
                    onClick={() => onViewDetails(category)}
                >
                    Ver Detalles
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;