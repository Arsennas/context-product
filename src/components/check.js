import React, {useContext} from 'react';
import { store } from '../context/store';

const Check = () => {
  const {removeCart, totalProduct} = useContext(store)
  return (
    <div className='check'>
      <h1>усешно оформили</h1>
      <span>общая сумма: {totalProduct} сом</span>
      <button onClick={removeCart}>закрыть чек</button>
    </div>
  );
};

export default Check;