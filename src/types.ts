export type CartItem = {
    ticker: string;
    totalSum: number;
    amountOfStocks: number;
    proportion: number;
    isSelected: boolean;
};

export type Stock = {
    ticker: string;
    desctiption: string;
    imageUrl: string;
}