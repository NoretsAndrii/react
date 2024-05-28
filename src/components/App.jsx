import './App.css';
import Product from './Product';
import SearchBar from './SearchBar/SearchBar';
import FeedbackForm from './Form/Form';
import Slider from './Slider/Slider';
import { useState, useEffect } from 'react';
import axios from 'axios';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = type => {
    setIndex(type === 'next' ? index + 1 : index - 1);
  };

  //=========================================================

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=react'
        );
        console.log(response);
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
        setError(true);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <div>
        <h1>Latest articles</h1>
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {articles.length > 0 && (
          <ul>
            {articles.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <SearchBar />
      <FeedbackForm />
      <Slider
        url={images[index]}
        onClick={handleClick}
        index={index}
        maxIndex={images.length - 1}
      />
    </div>
  );
}

export default App;
