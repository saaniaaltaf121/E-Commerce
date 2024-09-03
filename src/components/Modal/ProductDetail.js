// ProductDetail.js
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ isOpen, onClose, title, img, category, price, description, addToCartHandler, rating, reviewCount }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 relative" onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={img} alt={title} className="w-full h-48 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 mb-2">{category}</p>
                <p className="text-lg font-bold mb-4">{price}</p>
                <div className="flex text-yellow-400 text-sm mb-2">
                    {[...Array(Math.round(rating))].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} />
                    ))}
                    <span className="text-gray-600 ml-2">({reviewCount} Reviews)</span>
                </div>
                <p className="text-gray-700 mb-4">{description}</p>
                <button 
                    className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={addToCartHandler}
                >
                    Add To Cart
                </button>
            </div>
        </div>,
        document.body
    );
};

export default ProductDetail;
