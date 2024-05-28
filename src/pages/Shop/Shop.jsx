import axios from 'axios';
import { useState, useEffect } from 'react';
import css from './Shop.module.css';
import Basket from '../../components/Slider/Basket/Basket';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [totalBasket, setTotalBasket] = useState(0);
  const [basket, setBasket] = useState([]);

  // const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
      setProducts(response.data);
    }
    fetchData();
  }, []);

  const handleClick = (price, product) => {
    setTotalBasket(prev => prev + price);
    setBasket(prev => [...prev, product]);
  };

  return (
    <div>
      Shop
      <Link to="basket" state={basket}>
        <Basket total={totalBasket} />
      </Link>
      <ul className={css.list}>
        {products.map(product => (
          <li className={css.item} key={product.id}>
            <h3>{product.title}</h3>
            <img className={css.image} src={product.image} alt="" />
            <div className={css.info}>
              <p>Price: {product.price}</p>
              <button
                type="button"
                onClick={() => handleClick(product.price, product)}
              >
                Buy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
