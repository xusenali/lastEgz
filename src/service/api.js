import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Barcha kategoriyalar
export const fetchAllCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data.categories;
};

// Kategoriya bo‘yicha taomlar
export const fetchMealsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return res.data.meals;
};

// Taom detali
export const fetchMealDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return res.data.meals?.[0] || null;
};
