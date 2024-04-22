import PropTypes from 'prop-types';

const Product = ({ name, imgUrl, price }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />
      <p>Price: {price} credits</p>
    </>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;
