import React from 'react';

const About = React.memo(() => {
  return (
    <div className="w-full sm:w-[95%] mx-auto sm:mt-5 lg:w-[75%] my-10">
      {/* Sarlavha */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#d62828] mb-8">
        О нас
      </h1>

      {/* Tarix va maqsad */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Bellisomi Pizza — это больше, чем просто пицца. Мы начали свой путь с мечты
          создать идеальное сочетание традиционных итальянских рецептов и местных вкусов.
          Каждый кусочек нашей пиццы — это история, приготовленная с любовью и заботой.
        </p>
      </div>

      {/* Rasmlar 3 ta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <img
          src="/images/pizza.jpg"
          alt="Пицца"
          className="rounded-xl shadow-lg w-full h-[250px] object-cover"
        />
        <img
          src="/images/kitchen.jpg"
          alt="Кухня"
          className="rounded-xl shadow-lg w-full h-[250px] object-cover"
        />
        <img
          src="/images/chef.jpg"
          alt="Шеф-повар"
          className="rounded-xl shadow-lg w-full h-[250px] object-cover"
        />
      </div>
      

      {/* Afzalliklar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h3 className="text-xl font-semibold text-[#d62828] mb-2">Быстрая доставка</h3>
          <p className="text-gray-600">Горячая пицца всего за 30 минут прямо к вашей двери.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h3 className="text-xl font-semibold text-[#d62828] mb-2">Итальянские рецепты</h3>
          <p className="text-gray-600">Настоящий вкус Италии с оригинальными ингредиентами.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h3 className="text-xl font-semibold text-[#d62828] mb-2">Гарантия качества</h3>
          <p className="text-gray-600">Мы тщательно отбираем продукты и соблюдаем стандарты.</p>
        </div>
      </div>

      {/* Jamoa haqida */}
      <div className="bg-[#fef3c7] py-10 px-6 md:px-16 rounded-xl shadow-inner text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b45309]">
          Наша команда
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          В Bellisomi Pizza работают увлечённые люди — от опытных поваров до внимательных курьеров.
          Мы верим, что любовь к еде передается в каждом заказе. Вместе мы делаем ваш обед особенным.
        </p>
      </div>
    </div>
  );
});

export default About;