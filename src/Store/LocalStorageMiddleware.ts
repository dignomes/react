import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './Store';

export const localStorageMiddleware: Middleware = store => next => action => {
    const result = next(action);
    
    // Check if the dispatched action belongs to 'cart' slice
    if (action.type.startsWith('cart/')) {
        localStorage.setItem('cartState', JSON.stringify((store.getState() as RootState).cart));
    }

    return result;
};
