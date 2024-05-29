import { useDispatch } from 'react-redux';
import { clearBasket } from '../../redux/store';

export default function ClearBasketButton() {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearBasket());
  };

  return (
    <button type="Button" onClick={handleClear}>
      Clear
    </button>
  );
}
