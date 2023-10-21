import axiosInstance from './AxiosInstance';
import { Stock } from '../types';

export const getStocks = async () => {
    // const response = await axiosInstance.get('/stocks');
    // return response.data;
    const st: Stock[] = [
        {
            ticker: 'AAPL',
            desctiption: 'You are simply the best',
            imageUrl: 'https://th.bing.com/th?id=OIP.m1ar389tpEOAFN1NTurqvwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
        }
    ];

    return st;
}

export const getStock = async () => {
    const response = await axiosInstance.get('/stock');
    return response.data;
}

export const likeStock = async (ticker: string) => {
    const response = await axiosInstance.post('/like', {ticker});
    return response.data;
}

export const dislikeStock = async (ticker: string) => {
    const response = await axiosInstance.post('/dislike', {ticker});
    return response.data;
}