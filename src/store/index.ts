import { configureStore } from '@reduxjs/toolkit';
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from './slices/carsSlice';
import { changeCost, changeName, formReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
