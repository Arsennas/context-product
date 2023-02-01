import React, {useContext} from 'react';

import { store } from '../context/store';

const Nav = () => {
  const { list, toggleTitle} = useContext(store)
  return (
    <nav className='nav'>
      <ol>
        {
          list.map((elem, index) => {
            return <li
              onClick={() => toggleTitle(elem.id, elem.title)}
              key={index}>
              {elem.title}
            </li>
          })
        }
      </ol>
    </nav>
  );
};

export default Nav;