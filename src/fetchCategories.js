// src/api/fetchCategories.js
const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

// Función JavaScript Asíncrona (Promesa y Fetch)
export const fetchCategories = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            // Manejo de Promesas
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.categories || [];
    } catch (error) {
        console.error("Error al obtener las categorías:", error);
        return [];
    }
};

// Función de utilidad para acortar descripciones (Función con argumentos)
export const shortenDescription = (description, maxLength = 150) => {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + '...';
    }
    return description;
};