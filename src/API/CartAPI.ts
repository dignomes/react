import { CartItem } from '../types';
import axiosInstance from './AxiosInstance';

export const getCartItems = async () => {
    const response = await axiosInstance.get('/cart');
    return response.data;
}

export const addItemToCart = async (item:CartItem) => {
    const response = await axiosInstance.post('/cart', item);
    return response.data;
}