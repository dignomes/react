export type CartItem = {
    ticker: string;
    totalSum: number;
    amountOfStocks: number;
    proportion: number;
    isSelected: boolean;
};

export type Stock = {
    ticker: string;
    description: string;
    imageUrl: string;
}