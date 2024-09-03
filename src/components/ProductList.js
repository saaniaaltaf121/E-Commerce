import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard';
import CategorySelector from './Category';


const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        price: '',
        availability: '',
        sort: ''
    });

  
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    useEffect(() => {
        const fetchProducts = async () => {
            let url = 'https://fakestoreapi.com/products';
            if (filters.category) {
                url = `https://fakestoreapi.com/products/category/${filters.category}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [filters.category]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value
        });
    };

    const handleCategorySelect = (category) => {
        setFilters({
            ...filters,
            category
        });
    };

    const filteredProducts = products
        .filter(product => product.title.toLowerCase().includes(debouncedSearchQuery))
        .filter(product => filters.price ? product.price >= filters.price.split('-')[0] && product.price <= filters.price.split('-')[1] : true)
        .filter(product => {
            if (filters.availability === 'in-stock') return product.rating.count > 0;
            if (filters.availability === 'out-of-stock') return product.rating.count === 0;
            return true;
        })
        .sort((a, b) => {
            if (filters.sort === 'price-asc') return a.price - b.price;
            if (filters.sort === 'price-desc') return b.price - a.price;
            if (filters.sort === 'name-asc') return a.title.localeCompare(b.title);
            if (filters.sort === 'name-desc') return b.title.localeCompare(a.title);
            return 0;
        });

    return (
        <div className="min-h-screen p-10 mt-8">
            <div className="container mx-auto">
                <div className="mb-6 flex flex-wrap gap-4 justify-between">
                    <div className="flex">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search products..."
                            className="p-3 border border-gray-300 rounded-l-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                        />
                        <button className="bg-blue-500 text-white px-4 flex items-center justify-center rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
                        </button>
                    </div>

                    <CategorySelector onSelectCategory={handleCategorySelect} />

                    <select
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className=" p-3  border border-gray-300 rounded-lg shadow-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out relative"
                        >
                            <option value="">All Prices</option>  
                        <option value="">All Prices</option>
                        <option value="0-50">0 - 50</option>
                        <option value="50-100">50 - 100</option>
                        <option value="100-500">100 - 500</option>
                        <option value="500-1000">500 - 1000</option>
                    </select>

                    <select
                        name="availability"
                        value={filters.availability}
                        onChange={handleFilterChange}
                        className="p-3  border border-gray-300 rounded-lg shadow-md bg-white text-black focus:outline-none "
                    >
                        <option value="">All</option>
                        <option value="in-stock">In Stock</option>
                        <option value="out-of-stock">Out of Stock</option>
                    </select>

                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleFilterChange}
                        className="p-3 border border-gray-300 rounded-lg shadow-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    >
                        <option value="">Sort By</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                img={product.image}
                                category={product.category}
                                title={product.title}
                                price={`$${product.price}`}
                                rating={product.rating.rate}
                                reviewCount={product.rating.count}
                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
