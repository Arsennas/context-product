import React, { useContext } from 'react';
import List from './list';
import ProductItem from './product-item';
import { store } from '../context/store';
const Product = () => {
  const { data, addToCart } = useContext(store)
  return (
    <div className='product'>
      <List
        items={data}
        renderItem={(elem) => <ProductItem
          buttonTitle={'купить'}
          onClick={() => addToCart(elem.id)}
          key={elem.id}
          {...elem}
        />}
      />
    </div>
  );
};

export default Product;