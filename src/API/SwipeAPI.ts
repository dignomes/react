import { Stock } from '../types';

export const getStocks = async () => {
    // const response = await axiosInstance.get('/stocks');
    // return response.data;
    const st: Stock[] = [
        {
            ticker: 'AAPL',
            description: 'You are simply the best',
            imageUrl: 'https://th.bing.com/th?id=OIP.m1ar389tpEOAFN1NTurqvwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
        },
        {
            ticker: 'TSL',
            description: 'You are simply the best',
            imageUrl: 'https://phantom-marca.unidadeditorial.es/87e06bac29cef3dd2afe0edc205ac160/resize/1320/f/webp/assets/multimedia/imagenes/2023/06/05/16859534914962.png'
        },
        {
            ticker: 'MCRS',
            description: 'You are simply the best',
            imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX////yUCL/uQF/ugABpO///v////3+sgD//PrvQAAApe79//3+/vnl9/7/+eYAmu31gGbxUiLxTRv0+eRxsgAAnu8AoO2iyVpavPD9tQDvThT+rQD+//byLADyPwDxd2BorgDygmzvSwDzgmX1fWX4n46aw1Hu9/xKtO9avPOTFwh+AAACPklEQVR4nO3c3VITQRRF4VZzOp2clkASRoExoCA/7/+CdhLwyiqrsvuUo65V3DI1X6YnXG1SIiIiIiIiIiIiIiIiIiIiIiIi+o8zobdrZLFIXg+hTVdouVgtStVyTdnrWEsVakj7/e2eIixfFruF0u3hFGzutlJ3Nacgoe0upNZfU24PYLP9ILUdc4o5qVZ3F++Uru/bSbdRFtagd9GsLDTh+mH/PWq6sEb4+gkLQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoT/ktCmLEyp7NbXa6Fv58lTTfp2zYJWljbe3p8rPXxvByH75vGT1GMNGuf1yDx32A6GHdJ2ZZf2u4fhZz78nLwFTq/XiKndorRONTvem/QxhU65U3ZTbq26myqM5LWXyM2VtfrbXl3ZcbvnuNcw+Uexp+MpPRMLA5qtxJ6b0MvZzVzqpv099CDhMJMaXo7C+XupeahwKTQbPncSpkih9AwnL3T1lPYRXoUKp/AMESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoR/k3BQNjOzTsIaJ5wtFeHystPuKU5okq/bM5zXsGWXr1bDpdJLu8phnXd18jRv/5th27W0n7lqHReWo1QdY3T7PJm2dH4dSis74FbpgvllnrP0BOt0/1HAz3LusXQWH+If/QSIiIiIiIiIiIiIiIiIiIiIiGjS/QBrWFbO7fAd+gAAAABJRU5ErkJggg=='
        },
        {
            ticker: 'TNDR',
            description: 'You are simply the best',
            imageUrl: 'data:image/jpeg;base64,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'
        }
    ];

    return st;
}

export const getStock = async () => {
    // const response = await axiosInstance.get('/stock');
    // return response.data;
    const st: Stock = 
    {
        ticker: 'AAPL',
        desctiption: 'You are simply the best',
        imageUrl: 'https://th.bing.com/th?id=OIP.m1ar389tpEOAFN1NTurqvwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    };

    return st;
}

export const likeStock = async (ticker: string) => {
    // const response = await axiosInstance.post('/like', {ticker});
    // return response.data;
    
    console.log("I like it: " + ticker);
}

export const dislikeStock = async (ticker: string) => {
    // const response = await axiosInstance.post('/dislike', {ticker});
    // return response.data;
    
    console.log("I dislike it: " + ticker);
}