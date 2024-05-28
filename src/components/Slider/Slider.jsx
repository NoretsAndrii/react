import { useState } from 'react';
import css from './Slider.module.css';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleClick = type => {
    setIndex(type === 'next' ? index + 1 : index - 1);
  };

  return (
    <div className={css.container}>
      <button onClick={() => handleClick('prev')} disabled={index === 0}>
        Prev
      </button>
      <img
        src={images[index]}
        alt=""
        width={600}
        height={400}
        style={{
          objectFit: 'cover',
        }}
      />
      <button
        onClick={() => handleClick('next')}
        disabled={index === images.length - 1}
      >
        Next
      </button>
    </div>
  );
}
