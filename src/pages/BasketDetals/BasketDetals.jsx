import { useLocation } from 'react-router-dom';

export default function BasketDetals() {
  const location = useLocation();
  const basketDetails = location.state;

  console.log(basketDetails);

  return <div>BasketDetals</div>;
}
