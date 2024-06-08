import { nanoid } from '@reduxjs/toolkit';
import coins from '../../assets/coins.json';
import css from './SearchWindow.module.css';
import { useState } from 'react';
import Coin from '../Coin/Coin';

const allCoins = coins.map(coin => {
  return { name: coin, favorite: false };
});

export default function SearchWindow() {
  const [filter, setfFilter] = useState('');
  const [visibleAllCoins, setVisibleAllCoins] = useState(true);

  const handleChange = e => {
    setfFilter(e.target.value.trim());
  };

  const visibleCoins = visibleAllCoins
    ? allCoins.filter(coin =>
        coin.name.toLowerCase().startsWith(filter.toLowerCase())
      )
    : allCoins.filter(coin => coin.favorite);

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Search..."
        onChange={handleChange}
      />
      <div className={css.buttons}>
        <button
          className={css.button}
          type="button"
          onClick={() => setVisibleAllCoins(false)}
        >
          Favorites
        </button>
        <button
          className={css.button}
          type="button"
          onClick={() => setVisibleAllCoins(true)}
        >
          All Coints
        </button>
      </div>
      <ul className={css.list}>
        {visibleCoins
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .map(item => (
            <li key={nanoid()}>
              <Coin item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}
