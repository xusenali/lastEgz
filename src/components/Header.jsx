import React, { useState } from 'react'
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { SiBitcoinsv } from "react-icons/si";
import DeliveryOptions from './DeliveryOptions';
import { Link, useNavigate } from 'react-router';

const regions = [
    'Toshkent', 'Andijon', 'Farg‘ona', 'Namangan',
    'Buxoro', 'Samarqand', 'Navoiy', 'Xorazm',
    'Qashqadaryo', 'Surxondaryo', 'Jizzax', 'Sirdaryo'
];
const Header = () => {

    const [openCityModal, setOpenCityModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Samarqand');
    const navigate = useNavigate()

    const handleSelect = (region) => {
        setSelectedCity(region);
        setOpenCityModal(false);
    };

    return (
        <div className='overflow-hidden  w-full sm:w-[95%] !mx-auto mt-0 sm:mt-5 lg:w-[75%] relative'>
            {/* Modal */}
            {openCityModal && (
                <div onClick={() => setOpenCityModal(false)} className="fixed inset-0 bg-[#0000001a] backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 w-100 max-h-[80vh] overflow-y-auto shadow-lg">
                        <ul className="space-y-2">
                            {regions.map((region) => (
                                <li
                                    key={region}
                                    onClick={() => handleSelect(region)}
                                    className="cursor-pointer text-xl py-2 px-4 rounded-md hover:bg-gray-100"
                                >
                                    {region}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            )}
           
            {/* Yuqori Panel */}
            <div className='hidden w-full sm:flex items-center justify-between text-[15px] md:text-[20px] lg:text-2xl'>
                <ul className='flex items-center gap-8'>
                    <li className='flex items-center'>
                        <FaPhoneVolume size={20} className='text-[#047857]' />
                        <b className='font-bold text-[#047857]'>1174</b>
                    </li>
                    <Link to='/about' className='text-[#828282]'>О нас</Link>
                    <li className='text-[#828282]'>Вакансии</li>
                </ul>
                <select name="language" id="language" className='outline-none w-15'>
                    <option value="ru">Ru</option>
                    <option value="uz">Uz</option>
                </select>
            </div>

            {/* Asosiy Sarlavha */}
            <div className='w-full h-max flex flex-col sm:flex-row items-center mt-3 lg:mt-5 justify-between'>
                <ul className='hidden sm:flex items-center gap-5 lg:gap-10'>
                    <div onClick={() => navigate('/')} className='cursor-pointer hidden sm:block img w-30 lg:w-50 h-10 lg:h-15'></div>
                    <li className='flex gap-5 items-center'>
                        <FaLocationDot className='text-[#047857]' size={25} />
                        <p className='flex flex-col text-[12px]'>
                            Город:
                            <b
                                onClick={() => setOpenCityModal(true)}
                                className='text-[#047857] lg:text-[20px] hover:underline cursor-pointer'
                            >
                                {selectedCity}
                            </b>
                        </p>
                    </li>
                    <li className='text-[15px] lg:text-[20px]'>24/7</li>
                </ul>

                <ul className='w-full sm:w-max flex items-center justify-between sm:gap-8 bg-[#047857] md:bg-white p-3 sm:p-2 sm:rounded'>
                    <img className='hidden md:block w-20 h-15 object-contain rounded-full' src="https://img.freepik.com/premium-vector/halal-logo-with-decorative-ribbon-certfied-stamp-stamp_597133-2486.jpg" alt="" />
                    <li className='flex items-center gap-2'>
                        <SiBitcoinsv size={20} className='text-yellow-300' />
                        <span className='text-white md:text-black'>0</span>
                    </li>
                    <Link to='/login' className='p-2 sm:p-3 md:px-10 md:py-5 bg-white sm:bg-[#047857] text-black sm:text-white font-bold rounded-4xl'>
                        Войти
                    </Link>
                </ul>

                <div className='block sm:hidden w-full'>
                    <DeliveryOptions />
                </div>
            </div>
        </div>
    );
};

export default Header;
