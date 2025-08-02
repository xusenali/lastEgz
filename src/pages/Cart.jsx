import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    // Mahsulotlarni localStorage'dan olish
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Har bir mahsulotga quantity qo‘shamiz agar yo‘q bo‘lsa
        const cartWithQuantities = storedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));

        setCartItems(cartWithQuantities);
        localStorage.setItem("cart", JSON.stringify(cartWithQuantities));
        window.dispatchEvent(new Event("cartUpdated"));
    }, []);

    // localStorage va state ni yangilash
    const updateLocalStorage = (items) => {
        setCartItems(items);
        localStorage.setItem("cart", JSON.stringify(items));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    // Mahsulotni o‘chirish
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.idMeal !== id);
        updateLocalStorage(updatedCart);
        toast.success("Mahsulot o‘chirildi");
    };

    // + tugma
    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.idMeal === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateLocalStorage(updatedCart);
    };

    // − tugma
    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.idMeal === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        updateLocalStorage(updatedCart);
    };

    // Umumiy narx
    const total = cartItems
        .reduce((sum, item) => sum + item.quantity * 9.99, 0)
        .toFixed(2);

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
        <div className="max-full p-10 mx-auto sm:p-8">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-6">🛒 Savatingizdagi mahsulotlar</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Mahsulotlar ro‘yxati */}
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.map(item => (
                        <div
                            key={item.idMeal}
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 shadow-md rounded-lg "
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
                                    <p className="text-green-600 font-medium mt-1">
                                        ${(item.quantity * 9.99).toFixed(2)} ({item.quantity} × $9.99)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decreaseQuantity(item.idMeal)}
                                    className="bg-gray-200 px-2 rounded text-xl"
                                >
                                    −
                                </button>
                                <span className="min-w-[24px] text-center font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => increaseQuantity(item.idMeal)}
                                    className="bg-gray-200 px-2 rounded text-xl"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => removeFromCart(item.idMeal)}
                                    className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-full transition ml-3"
                                    title="O‘chirish"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Jami hisob */}
                <div className="shadow-xl rounded-lg p-6  flex flex-col gap-6  h-fit bg-white">
                    <h2 className="text-xl font-semibold mb-4">🧾 Jami hisob:</h2>
                    <div className="flex justify-between text-lg mb-4">
                        <span>Mahsulotlar:</span>
                        <span>{cartItems.reduce((a, b) => a + b.quantity, 0)} ta</span>
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
