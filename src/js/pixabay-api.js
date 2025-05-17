import axios from 'axios';

const API_KEY = '50344127-726c85bb6f98eba42715a8612'; // Заміни на свій ключ

export const getImagesByQuery = async (query) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
