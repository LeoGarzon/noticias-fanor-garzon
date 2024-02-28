import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/NewsReducer';

const store = configureStore({
    reducer: {
        news: newsReducer
    },
    preloadedState: {
        news: {
            newsData: []
        }
    }
});

export default store;