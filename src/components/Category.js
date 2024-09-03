import React, { useState, useEffect } from 'react';

const CategorySelector = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <select 
        onChange={(e) => onSelectCategory(e.target.value)} 
        className="p-3 border border-gray-300 rounded-lg shadow-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
    >
        <option value="" className="">All Categories</option>
        {categories.map((category, index) => (
            <option key={index} value={category} >
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
        ))}
    </select>
    
    );
};

export default CategorySelector;
