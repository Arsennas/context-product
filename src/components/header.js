import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from './../context/store';

const Header = () => {
  const navigate = useNavigate()
  const {toggleDiscount,title} = useContext(store)
  return (
    <div className='header'>
      <div className="container">
        <div className="content">
          <h1 onClick={() => navigate('/')}>Product name: {title}</h1>
          <h1 onClick={toggleDiscount}>акции</h1>
          <h1 onClick={() => navigate('/cart')}>Корзина</h1>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;