import config from '../config/config';

export const setNewsData = (data) => ({
    type: 'SET_NEWS_DATA',
    payload: data,
});