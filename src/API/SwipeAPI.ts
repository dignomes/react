import { Stock } from '../types';
import axiosInstance from './AxiosInstance';
import { getOrGenerateGuid } from '../API/GuidManager';

export const getStocks = async () => {
    // const response = await axiosInstance.get('/api/stock-recommend/');
    // // return response.data;
    // console.log("response");
    // console.log(response);
    // const st: Stock[] = response.data;

    return Promise.resolve([
        {
          id: 6,
          stock: "stock.Reaction.None",
          title: "Andes - Crunchbase Investor Profile & Investments",
          description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
          tags: "['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391']",
          image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg",
          ticker_symbol: 'AND'
        }
    ]);
}

export const getStock = async () => {
    // const response = await axiosInstance.get('/stock');
    // return response.data;
    const st: Stock = {
      id: 6,
      stock: "stock.Reaction.None",
      title: "Andes - Crunchbase Investor Profile & Investments",
      description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
      tags: "['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391']",
      image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg",
      ticker_symbol: 'AND'
    };

    return st;
}

export const likeStock = async (id: number) => {
    const response = await axiosInstance.post(
        '/api/stock-reaction//',
        {
            "stockId":id,
            "accountId":getOrGenerateGuid(),
            "reaction":"DISLIKE"
            }
        );
    // return response.data;
    console.log("response");
    console.log(response);
}

export const dislikeStock = async (id: number) => {
    // const response = await axiosInstance.post('/dislike', {ticker});
    // return response.data;
    
    console.log("I dislike it: " + id);
}