import { useDispatch, useSelector } from 'react-redux';
import { Car } from './Cars.types';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form: { name }, cars: { data, searchTerm } }) => {
      const filteredCars = data.filter((car: Car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name,
      };
    }
  );

  const handleCarDelete = (car: Car): void => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = () =>
    cars.map((car: Car) => {
      const bold = name && car.name.toLowerCase().includes(name?.toLowerCase());
      return (
        <div className={`panel ${bold && 'bold'}`} key={car.id}>
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

  return <div className='car-list'>{renderedCars()}</div>;
}

export default CarList;
