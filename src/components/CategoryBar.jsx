import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
    'Комбо', 'Пицца', 'Закуски', 'Напитки', 'Салаты', 'Десерты', 'Соусы',
];

const CategoryBar = () => {
    const [cartCount, setCartCount] = useState(0);

   
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length);
    };

    useEffect(() => {
        updateCartCount();

        const handleCartUpdate = () => updateCartCount();
        window.addEventListener("cartUpdated", handleCartUpdate);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
        };
    }, []);

    return (
        <div className="w-full px-4 py-2 bg-white sm:flex justify-between items-center gap-3">
            <div className="flex overflow-x-auto whitespace-nowrap gap-2 px-4 py-2 hide-scrollbar">
                {categories.map((item, index) => (
                    <button
                        key={index}
                        className="hover:bg-green-100 duration-100 px-4 py-2 bg-gray-100 text-black rounded-full font-medium text-sm sm:text-[20px]"
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="ml-auto hidden sm:block">
                <Link
                    to="/cart"
                    className="hidden sm:flex items-center px-4 py-2 gap-2 rounded-full text-white bg-red-600 font-medium text-sm sm:text-[20px] whitespace-nowrap"
                >
                    Корзина
                    <span className="mx-2 border-l border-white h-4"></span>
                    <span>{cartCount}</span>
                </Link>
            </div>
        </div>
    );
};

export default CategoryBar;
