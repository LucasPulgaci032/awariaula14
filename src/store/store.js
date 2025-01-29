import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites';


const savedState = JSON.parse(localStorage.getItem('react-redux'))?.favorites || [];

const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    },
    preloadedState: {
        favorites: savedState 
    }
});

store.subscribe(() => {
    const state = store.getState();
    const data = JSON.stringify(state);
    localStorage.setItem('react-redux', data);
});

export default store;
