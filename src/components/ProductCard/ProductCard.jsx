import css from './ProductCard.module.css';

export default function ProductCard({ children, product, handleClick }) {
  return (
    <div className={css.item}>
      <h3>{product.title}</h3>
      <img className={css.image} src={product.image} alt="" />
      <div className={css.info}>
        <p>Price: {product.price}</p>
        <button type="button" onClick={() => handleClick(product)}>
          {children}
        </button>
      </div>
    </div>
  );
}
