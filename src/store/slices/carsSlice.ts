import { createSlice, nanoid } from '@reduxjs/toolkit';

// type Car = {
//     name: string;
//     cost: number;
//     id: string;
// };

// type CarPayload = {
//     payload: Car;
// };

// interface Cars {
//     cars: Car[];
// }

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [{
        name: '',
        cost: 0,
        id: '',
    }],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // action.payload = {name: ab, cost: 159}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // action.payload is the id of the car that we wanna delete
      //   state.cars.splice(action.payload);
      const updated = state.cars.filter((car) => car.id !== action.payload)
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
