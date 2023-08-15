import { useSelector } from 'react-redux';
import { Car } from './Cars.types';

function CarValue() {
  const totalCost: number = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car: Car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc: number, car: Car) => acc + car.cost, 0)
  );

  return <div className='car-value'>Total cost: ${totalCost}</div>;
}

export default CarValue;
