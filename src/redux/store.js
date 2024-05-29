import { configureStore } from '@reduxjs/toolkit';

export const addProducts = value => {
  return {
    type: 'basket/addProducts',
    payload: value,
  };
};

export const deleteProducts = value => {
  return {
    type: 'basket/deleteProduct',
    payload: value,
  };
};
export const clearBasket = () => {
  return {
    type: 'basket/clearBasket',
  };
};

export const addProductQuantity = value => {
  return {
    type: 'basket/addProductQuantity',
    payload: value,
  };
};

export const minusProductQuantity = value => {
  return {
    type: 'basket/minusProductQuantity',
    payload: value,
  };
};

const initialStore = {
  basket: {
    products: [],
    total: 0,
  },
};

const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'basket/addProducts':
      if (!store.basket.products.some(item => item.id === action.payload.id)) {
        return {
          ...store,
          basket: {
            products: [
              ...store.basket.products,
              { ...action.payload, quantity: 1 },
            ],
            total: store.basket.total + action.payload.price,
          },
        };
      } else {
        return {
          ...store,
          basket: {
            products: store.basket.products.map(item => {
              if (item.id !== action.payload.id) return item;
              else return { ...item, quantity: item.quantity + 1 };
            }),
            total: store.basket.total + action.payload.price,
          },
        };
      }

    case 'basket/deleteProduct':
      return {
        ...store,
        basket: {
          products: store.basket.products.filter(
            item => item.id !== action.payload.id
          ),
          total:
            store.basket.total - action.payload.price * action.payload.quantity,
        },
      };

    case 'basket/clearBasket':
      return {
        ...store,
        basket: {
          products: [],
          total: 0,
        },
      };

    case 'basket/addProductQuantity':
      return {
        ...store,
        basket: {
          products: store.basket.products.map(item => {
            if (item.id !== action.payload.id) return item;
            else return { ...item, quantity: item.quantity + 1 };
          }),
          total: store.basket.total + action.payload.price,
        },
      };

    case 'basket/minusProductQuantity':
      return {
        ...store,
        basket: {
          products: store.basket.products.map(item => {
            if (item.id !== action.payload.id) return item;
            else return { ...item, quantity: item.quantity - 1 };
          }),
          total: store.basket.total - action.payload.price,
        },
      };

    default:
      return store;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
