import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaSignInAlt, FaPizzaSlice, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const DeliveryOptions = () => {
    const [activeTab, setActiveTab] = useState('delivery');
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const labelText =
        activeTab === 'delivery'
            ? 'Выберите адрес доставки'
            : 'Выберите филиал';

    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartCount(cart.length);
        };

        updateCartCount();
        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    return (
        <div className="!w-full mx-auto p-4 space-y-4 flex flex-col sm:flex-row items-center ">

            <div className='mobilesiber'>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <div className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4 flex justify-between items-center">
                        <select className="text-sm p-2 bg-gray-100 rounded outline-none border-none">
                            <option>Андижан</option>
                            <option>Бухара</option>
                            <option>Фаргона</option>
                            <option>Джизак</option>
                            <option>Хорезм</option>
                            <option>Навои</option>
                            <option>Наманган</option>
                            <option>Кашкадарья</option>
                            <option>Самарканд</option>
                            <option>Сурхандарья</option>
                            <option>Сырдарья</option>
                            <option>Ташкент</option>
                        </select>

                        <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">✕</button>
                    </div>

                    <div className="p-4 flex flex-col gap-8">
                        <button className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl">
                            <FaSignInAlt className="text-xl" />
                            Войти
                        </button>

                        <div className="bg-gray-100 rounded-xl">
                            <button className="flex items-center gap-3 w-full px-4 py-2">
                                <FaPizzaSlice />
                                Меню
                            </button>
                            <hr className='!my-5' />
                            <button className="flex items-center gap-3 w-full px-4 py-2">
                                <FaMapMarkerAlt />
                                Рестораны
                            </button>
                        </div>

                        <button className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl text-gray-600">
                            <FaPhone />
                            Позвонить нам
                        </button>
                    </div>
                </div>
            </div>

            <ul className='flex w-full sm:w-[60%]  justify-between  h-12  items-center'>
                <BiMenuAltLeft onClick={() => setIsOpen(true)} size={20} className="text-gray-700 sm:hidden" />

                <div className="relative w-[80%] sm:h-15 bg-gray-200 rounded-full flex overflow-hidden text-sm font-semibold mt-2">
                    <div
                        className={`absolute top-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 shadow-[inset_0_-2px_4px_#e5e7eb,inset_0_2px_4px_#e5e7eb] ${activeTab === 'pickup' ? 'translate-x-full' : ''
                            }`}
                    ></div>

                    <button
                        className={`w-1/2 py-2 z-10 transition ${activeTab === 'delivery' ? 'text-black' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('delivery')}
                    >
                        Доставка
                    </button>
                    <button
                        className={`w-1/2 py-2 z-10 transition ${activeTab === 'pickup' ? 'text-black' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('pickup')}
                    >
                        Самовывоз
                    </button>
                </div>

                <li className='relative sm:hidden'>
                    <MdOutlineShoppingCart size={20} className="text-gray-700" />
                    {cartCount > 0 && (
                        <span className='absolute top-[-10px] right-[-10px] text-white h-4 w-4 text-[13px] flex items-center justify-center bg-red-500 rounded-full'>
                            {cartCount}
                        </span>
                    )}
                </li>
            </ul>

            <div className=" w-full sm:w-[40%] !mt-4 flex items-center justify-between border border-yellow-400 bg-yellow-50 px-4 py-3 rounded-md text-yellow-600 text-sm">
                <span>{labelText}</span>
                <FiEdit2 className="text-yellow-600 cursor-pointer" />
            </div>
        </div>
    );
};

export default DeliveryOptions;
