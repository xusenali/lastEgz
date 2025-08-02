import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

const Login = () => {
    const [phone, setPhone] = useState('');

    return (
        <div className="w-full h-150 flex justify-center items-center">
            <div className=' h-100 text-center'>
                <label className="block mb-2 font-medium text-4xl">Введите свой номер</label>
                <IMaskInput
                    mask="+998 00 000 00 00"
                    value={phone}
                    unmask={false}
                    onAccept={(value) => setPhone(value)}
                    placeholder="+998 90 123 45 67"
                    className="!mt-10 p-5 border border-gray-300 text-2xl rounded w-full outline-none focus:border-[#047857]"
                />

                <button className='p-5 px-10 text-2xl text-white bg-green-700 !mt-5 rounded-full'>Отправить код</button>
            </div>
        </div>
    );
};

export default Login;
