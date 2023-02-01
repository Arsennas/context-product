import React, { useState,useContext } from 'react';
import List from './list';
import { store } from './../context/store';

const initialState = {
  username: '',
  phone: '',
  address: '',
  radio: 'radio'
}
const Modal = () => {
  const {cart, totalProduct, setOpen, byProduct, loading} = useContext(store)
  const [state, setState] = useState(initialState)

  const handlerChange = (e) => {
    setState({...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setState(initialState)
    byProduct()
    console.log({...state, products: cart.map(elem => elem.id) })
  }
  return (
    <div className='modal'>
      <h1>оформление</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          name='username'
          value={state.username}
          onChange={handlerChange}
          type="text"
          placeholder='ФИО' />
        <input
          name='address'
          value={state.address}
          onChange={handlerChange}
          type="text"
          placeholder='ваш адрес' />
        <input
          name='phone'
          value={state.phone}
          onChange={handlerChange}
          type="text"
          placeholder='телефон' />
        <div className='form-control'>
          <div className='form-radio'>
            <label htmlFor="">с доставкой</label>
            <input
              value={'с доставкой'}
              onChange={handlerChange}
              name='radio'
              type="radio" />
          </div>
          <div className='form-radio'>
            <label htmlFor="">самовызов</label>
            <input
              value={'самовызов'}
              onChange={handlerChange}
              name='radio'
              type="radio" />
          </div>
        </div>
        <div className='product-list'>
          <List
            items={cart}
            renderItem={(elem, index) => <div 
              key={elem.id} 
              className='list'>
              <span>{index + 1}: </span>
              <span>названия товара: {elem.title}</span>
              <br />
              <span>{elem.count} шт</span>
            </div>}
          />
        </div>
        <h3>общая сумма: {totalProduct} сом</h3>
        <button type='submit'>{loading ? 'загрузка...' : 'оформить'}</button>
      </form>
      <button
        onClick={() => setOpen(false)}>
        отмена
      </button>
    </div>
  );
};

export default Modal;