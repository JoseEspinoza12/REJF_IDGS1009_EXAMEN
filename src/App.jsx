import React, { useState, useEffect, useCallback } from 'react';
import { fetchCategories } from './fetchCategories';
import CategoryList from './components/CategoryList';
import Header from './components/Header';


const App = () => {
    // Uso de `useState` 
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Función Asíncrona con Argumentos (uso de useCallback para optimización)
    const loadCategories = useCallback(async (initialLoad = false) => {
        if (initialLoad) setIsLoading(true);
        console.log("Obteniendo categorías...");
        const data = await fetchCategories();
        setCategories(data);
        if (initialLoad) setIsLoading(false);
    }, []);

    // Función para manejar el clic en 'Ver Detalles'
    const handleViewDetails = (category) => {
        // Desestructuración para obtener propiedades de la categoría
        const { strCategory, strCategoryDescription } = category; 

        // Template String para mostrar la información en un alert
        alert(`
            Categoría: ${strCategory}
            Descripción:
            ${strCategoryDescription}
        `);
    };

    useEffect(() => {
        // No cargamos los datos automáticamente, solo configuramos el intervalo después de la carga inicial
        let intervalId = null;

        if (categories.length > 0) {
            // Se usa `setInterval` para el refresh (Intervalos)
            intervalId = setInterval(() => {
                console.log("Actualizando categorías por intervalo...");
                loadCategories(); 
            }, 60000); 
        }

        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [categories.length, loadCategories]); 

    return (
        <div>
            <Header 
                onLoadCategories={() => loadCategories(true)} 
                isLoading={isLoading} 
            />
            <div className="container">
                
                <CategoryList 
                    categories={categories} 
                    onViewDetails={handleViewDetails} 
                />
            </div>
        </div>
    );
};

export default App;