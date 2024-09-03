// ProductCard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/ProductDetail';
import Loader from './Loader/Loader';

const ProductCard = ({ id, img, category, title, price, rating, reviewCount }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    const addToCartHandler = (e) => {
        e.stopPropagation();
        const product = { id, title, price, category, img, quantity: 1 };
        dispatch(addItem(product));
        toast.success(`${title} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const openModal = async (e) => {
        e.stopPropagation();
        setLoading(true);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProductDetails(data);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Failed to fetch product details:', error);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setProductDetails(null);
    };

    return (
        <div className="border border-gray-200 shadow-xl rounded-xl bg-white hover:shadow-2xl transition duration-200 ease-in-out cursor-pointer" onClick={openModal}>
            <div className="flex flex-col p-4">
                <img src={img} alt={title} className="w-full h-48 object-contain mb-4" />
                <div>
                    <p className="text-xs text-gray-400">{category}</p>
                    <h3 className="text-md font-medium mt-2 mb-1 truncate">{title}</h3>
                    <div className="flex text-sm mb-2">
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className={index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                    <p className="text-lg font-bold text-gray-800 mb-4">{price}</p>
                    <button
                        className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
                        onClick={addToCartHandler}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
            <ToastContainer />
            {loading && <Loader />}
            {productDetails && !loading && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={productDetails.title}
                    img={productDetails.image}
                    category={productDetails.category}
                    price={`$${productDetails.price}`}
                    description={productDetails.description}
                    addToCartHandler={addToCartHandler}
                    rating={productDetails.rating.rate}
                    reviewCount={productDetails.rating.count}
                />
            )}
        </div>
    );
};

export default ProductCard;
