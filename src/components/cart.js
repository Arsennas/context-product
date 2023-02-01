import React, { useContext } from 'react';
import Check from './check';
import List from './list';
import Modal from './modal';
import ProductItem from './product-item';
import { store } from '../context/store';


const Cart = () => {
  const { cart, plus,min, deleteProduct, totalProduct, open, checkOpen, setOpen} = useContext(store)

  if (totalProduct === 0) {
    return <h1>Корзина пусто!</h1>
  }

  return (
    <>
      <h1>общая сумма: {totalProduct} сом</h1>
      {
        totalProduct !== 0 ?
          <button
            onClick={() => setOpen(true)}
            style={{ marginBottom: '20px' }}>оформить заказ</button>
          : null
      }

      {
        open ?
          <Modal /> : null
      }
      {checkOpen ?
        <Check/>
        :
        null}

      <div className='product'>
        <List
          items={cart}
          renderItem={(elem) => <ProductItem
            min={() => min(elem.id)}
            plus={() => plus(elem.id)}
            onClick={() => deleteProduct(elem.id)}
            buttonTitle={'удалить'}
            {...elem} key={elem.id} />}
        />
      </div>
    </>
  );
};

export default Cart;