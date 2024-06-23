import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_API;

export const login = async (username, password) => {
    console.log(API_URL);
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = async () => {
    console.log('entro');
    const token = localStorage.getItem('token');

    if (!token) {
        console.log('entro la primera condicion');
        return false;
    }

    try {
        const response = await axios.get(`${API_URL}/validatetoken`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.valid; // Suponemos que la respuesta del servidor tiene un campo `valid`
    } catch (error) {
        console.error('Token validation error', error);
        return false;
    }
};

