export type CartItem = {
    ticker: string;
    totalSum: number;
    amountOfStocks: number;
    proportion: number;
};

export type Stock = {
    id: number;
    stock: string;
    title: string;
    description: string;
    tags: string;
    image_url: string;
    ticker_symbol: string
}