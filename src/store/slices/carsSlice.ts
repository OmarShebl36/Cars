import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Car } from '../../components/Cars.types';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [] as Car[],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // action.payload = {name: ab, cost: 159}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // action.payload is the id of the car that we wanna delete
      const updated = state.data.filter((car) => car.id !== action.payload)
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
