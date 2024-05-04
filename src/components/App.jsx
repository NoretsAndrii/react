// import { useState } from 'react';

import './App.css';
import Product from './Product';
import SearchBar from './SearchBar/SearchBar';
import FeedbackForm from './Form/Form';
import Slider from './Slider/Slider';
import { useState } from 'react';

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

  return (
    <div>
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
