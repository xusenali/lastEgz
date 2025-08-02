import { useEffect, useState } from 'react';
import { fetchAllCategories, fetchMealsByCategory } from "../service/api";
import Swwiper from '../components/Swwiper';
import DeliveryOptions from '../components/DeliveryOptions';
import CategoryBar from '../components/CategoryBar';
import toast, { Toaster } from 'react-hot-toast';

export const Home = () => {

    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const load = async () => {
            const cats = await fetchAllCategories();
            setCategories(cats);

            const mealsInChicken = await fetchMealsByCategory("Chicken");
            setMeals(mealsInChicken);
        };

        load();
    }, []);

    const addToCart = (meal) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.idMeal === meal.idMeal);
        if (!existing) {
            cart.push({ ...meal, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
            window.dispatchEvent(new Event("cartUpdated"));
            toast.success(`${meal.strMeal} savatga qo‘shildi!`);
        } else {
            toast.error(`${meal.strMeal} allaqachon savatda bor.`);
        }
    };

    return (
        <div className='w-full sm:w-[95%] !mx-auto mt-5 lg:w-[75%] lg:mt-10'>
            <Toaster position="top-right" />
            <div className='relative w-full h-[200px] sm:h-[300px] lg:h-[400px]'>
                <Swwiper />
            </div>
            <div className='hidden sm:flex mt-6'>
                <DeliveryOptions />
            </div>

            <CategoryBar />

            <div className='mt-10'>
                <h1 className="text-xl font-semibold mb-4">🍗 Chicken Taomlari:</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 lg:p-10'>
                    {meals.map((meal) => (
                        <div
                            key={meal.idMeal}
                            className='bg-white rounded-xl shadow  hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full'
                        >
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className='w-full h-40 object-cover rounded-md'
                            />
                            <div className="p-5 mt-2 flex-1 flex flex-col gap-5 justify-between">
                                <div>
                                    <h2 className='text-lg font-semibold'>{meal.strMeal}</h2>
                                    <p className='text-sm text-gray-600 mt-1'>
                                        Bu juda mazali va oson tayyorlanadigan taom. Siz albatta sinab ko‘ring!
                                    </p>
                                </div>
                                <button
                                    onClick={() => addToCart(meal)}
                                    className='mt-4 w-full bg-red-500 cursor-pointer text-white py-2 px-4 rounded-md transition'
                                >
                                    Savatga qo‘shish
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
