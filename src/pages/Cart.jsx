import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.idMeal !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        toast.success("Mahsulot o‘chirildi");
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const total = (cartItems.length * 9.99).toFixed(2);

    if (cartItems.length === 0) {
        return (
            <div className="text-center min-h-[70vh] flex flex-col gap-5 items-center justify-center p-10">
                <FaShoppingCart size={200} className="text-gray-400 mb-6" />
                <h2 className="text-[20px] sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
                    Ваша корзина пока пуста 😕
                </h2>
                <button
                    onClick={() => navigate('/')}
                    className="bg-[#047857] w-full sm:w-[50%] lg:w-[20%] text-white px-6 py-3 rounded-full hover:bg-[#03644d] transition"
                >
                    Главное меню
                </button>
            </div>
        );
    }

    return (
        <div className="max-full p-10 mx-auto  sm:p-8">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-6">🛒 Savatingizdagi mahsulotlar</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map(item => (
                        <div
                            key={item.idMeal}
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border rounded-lg shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.strMealThumb}
                                    alt={item.strMeal}
                                    className="w-24 h-24 rounded-md object-cover"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.strMeal}</h2>
                                    <p className="text-gray-500 text-sm">Kategoriya: Chicken</p>
                                    <p className="text-green-600 font-medium mt-1">$9.99</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.idMeal)}
                                className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-full transition"
                                title="O‘chirish"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="border rounded-lg p-6 shadow-md h-fit bg-white">
                    <h2 className="text-xl font-semibold mb-4">🧾 Jami hisob:</h2>
                    <div className="flex justify-between text-lg mb-4">
                        <span>Mahsulotlar:</span>
                        <span>{cartItems.length} ta</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold mb-6">
                        <span>Jami:</span>
                        <span>${total}</span>
                    </div>
                    <button
                        onClick={() => alert("Buyurtma berish funksiyasi hali qo‘shilmagan")}
                        className="w-full bg-[#047857] hover:bg-[#03644d] text-white py-3 rounded-full text-lg transition"
                    >
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
