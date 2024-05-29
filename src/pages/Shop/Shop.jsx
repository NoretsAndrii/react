import axios from 'axios';
import { useState, useEffect } from 'react';
import css from './Shop.module.css';
import Basket from '../../components/Slider/Basket/Basket';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../redux/store';
import ClearBasketButton from '../../components/ClearBasketButton/ClearBasketButton';

export default function Shop() {
  const [products, setProducts] = useState([]);

  const totalBasket = useSelector(store => store.basket.total);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
      setProducts(response.data);
    }
    fetchData();
  }, []);

  const handleClick = product => {
    dispatch(addProducts(product));
  };

  return (
    <div>
      Shop
      <Link to="basket" state={location}>
        <Basket total={totalBasket.toFixed(2)} />
      </Link>
      <ClearBasketButton />
      <ul className={css.list}>
        {products.map(product => (
          <li className={css.item} key={product.id}>
            <ProductCard
              handleClick={() => handleClick(product)}
              product={product}
            >
              Buy
            </ProductCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
