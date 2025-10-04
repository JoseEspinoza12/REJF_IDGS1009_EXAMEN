// src/components/CategoryList.jsx
import React from 'react';
import CategoryCard from './CategoryCard';

// Componente React (Función con argumentos `categories` y `onViewDetails`)
const CategoryList = ({ categories, onViewDetails }) => {
    if (categories.length === 0) {
        return (
            <div className="alert alert-warning text-center mt-4" role="alert">
                No se pudieron cargar las categorías. Intenta de nuevo más tarde.
            </div>
        );
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3" id="categories-container">
            {categories.map(category => (
                <div key={category.idCategory} className="col">
                    <CategoryCard 
                        category={category} 
                        onViewDetails={onViewDetails} // Propagación de función con argumento
                    />
                </div>
            ))}
        </div>
    );
};

export default CategoryList;