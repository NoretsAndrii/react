import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductQuantity,
  deleteProducts,
  minusProductQuantity,
} from '../../redux/store';
import ClearBasketButton from '../../components/ClearBasketButton/ClearBasketButton';
import css from './BasketDetals.module.css';

export default function BasketDetals() {
  const location = useLocation();
  const backLink = location.state;

  const dataBasket = useSelector(store => store.basket.products);
  const totalBasket = useSelector(store => store.basket.total);

  const dispatch = useDispatch();

  const handleDeleteClick = product => {
    dispatch(deleteProducts(product));
  };

  const handleAddClick = product => {
    dispatch(addProductQuantity(product));
  };

  const handleMinusClick = product => {
    dispatch(minusProductQuantity(product));
  };

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <ul className={css.list}>
        {dataBasket.map(product => (
          <li className={css.item} key={product.id}>
            <ProductCard
              handleClick={() => handleDeleteClick(product)}
              product={product}
            >
              Delete
            </ProductCard>
            <div className={css.quantity}>
              <p>Quantity:{product.quantity}</p>
              <button
                type="button"
                disabled={product.quantity === 1}
                onClick={() => handleMinusClick(product)}
              >
                -
              </button>
              <button type="button" onClick={() => handleAddClick(product)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {totalBasket.toFixed(2)}</p>
      <ClearBasketButton />
    </div>
  );
}
