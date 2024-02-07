
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('storeSaved', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('storeSaved') !== null) {
    console.log(localStorage.getItem('storeSaved'));
    return JSON.parse(localStorage.getItem('storeSaved')); // re-hydrate the store

  }
};

//STORE CONFIGURATION
const store = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;


