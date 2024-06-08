import { useState } from 'react';

export default function Coin({ item }) {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  //   const handleFavoritClick = item => {
  //     item.favorite = item.favorite ? false : true;
  //     console.log(item);
  //   };
  const handleFavoritClick = () => {
    item.favorite = item.favorite ? false : true;
    setIsFavorite(prev => (prev ? false : true));
    console.log(item.favorite);
  };
  return (
    <div>
      {!isFavorite ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          onClick={() => handleFavoritClick(item)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595zm-7.247.47H6.72L8 2.507 6.72 6.722H2.348zm3.537 2.75l-1.307 4.305 1.307-4.305zm7.767-2.75H9.28h4.372zm-8.75.9h2.366L8 5.214l.732 2.41h2.367l-1.915 1.49.731 2.409L8 10.032l-1.915 1.49.731-2.41-1.915-1.49z"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          onClick={() => handleFavoritClick(item)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"
          />
        </svg>
      )}
      {item.name}
    </div>
  );
}
