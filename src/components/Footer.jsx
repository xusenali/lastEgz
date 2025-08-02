import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white w-full">
      <div className="max-w-[1200px] !mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Logo и контакт */}
        <div>
          <div className="text-2xl font-bold flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <span>Bellissimo Pizza</span>
          </div>
          <p className="text-sm text-gray-300">ПОЗВОНИТЕ НА НОМЕР - <strong>1174</strong></p>
        </div>

        {/* Первый столбец */}
        <div className="text-sm space-y-2">
          <p>О нас</p>
          <p>Публичная оферта</p>
          <p>Политика конфиденциальности</p>
          <p>Халал сертификат</p>
          <p>Рестораны</p>
        </div>

        {/* Второй столбец */}
        <div className="text-sm space-y-2">
          <p>Вакансии</p>
          <p>Франшиза</p>
          <div className="flex gap-3 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Payme_logo.svg/2560px-Payme_logo.svg.png" alt="Payme" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Uzcard.png" alt="Uzcard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Click_logo.svg/2560px-Click_logo.svg.png" alt="Click" className="h-6" />
          </div>
        </div>

        {/* Третий столбец */}
        <div>
          <p className="text-sm mb-2">Следите за нами</p>
          <div className="flex gap-4 text-gray-300">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaInstagram size={22} /></a>
            <a href="#"><FaTelegramPlane size={22} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2016–2025 Bellissimo Pizza.
      </div>
    </footer>
  );
};

export default Footer;
