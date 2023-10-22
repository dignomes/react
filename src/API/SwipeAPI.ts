import {Stock} from '../types';
import axiosInstance from './AxiosInstance';
import {getOrGenerateGuid} from '../API/GuidManager';

export const getStocks = async () => {
    const response = await axiosInstance.get('/api/stock-recommend/');
    console.log("response");
    console.log(response);
    const st: Stock[] = response.data.map((el: any) => {
        el.tags = el.tags.slice(1, -1).split(",");
        return el;
    });

    return st;
}

export const getStock = async () => {
    // const response = await axiosInstance.get('/stock');
    // return response.data;
    const st: Stock = {
        id: 6,
        stock: "stock.Reaction.None",
        title: "Andes - Crunchbase Investor Profile & Investments",
        description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
        tags: ['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391'],
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg",
        ticker_symbol: 'AND'
    };

    return st;
}

export const likeStock = async (id: number, load_data: boolean) => {
    const response = await axiosInstance.post(
        '/api/stock-reaction//',
        {
            "stockId": id,
            "accountId": getOrGenerateGuid(),
            "reaction": "LIKE"
        }
    );
    if(load_data){
        return getStocks()
    }
}

export const dislikeStock = async (id: number, load_data: boolean) => {
    const response = await axiosInstance.post(
        '/api/stock-reaction//',
        {
            "stockId": id,
            "accountId": getOrGenerateGuid(),
            "reaction": "DISLIKE"
        }
    );
    if(load_data){
        return getStocks()
    }
}