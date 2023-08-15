import { useDispatch, useSelector } from 'react-redux';
import { Car } from './Cars.types';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const cars: Car[] = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car: Car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleCarDelete = (car: Car): void => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = () => {
    return cars.map((car: Car) => {
      return (
        <div className='panel' key={car.id}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className='button is-danger'
            onClick={() => handleCarDelete(car)}
          >
            Delete
          </button>
        </div>
      );
    });
  };

  return <div className='car-list'>{renderedCars()}</div>;
}

export default CarList;
