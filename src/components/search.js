import React, {useState,useContext} from 'react';
import { store } from './../context/store';

const Search = () => {
  const {searchData} = useContext(store)
  const [value, setValue] = useState('')

  const handlerSubmit = (event) => {
    event.preventDefault()
    setValue('')
    searchData(value)
  }
  
  return (
    <form onSubmit={handlerSubmit}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        type="text" />
      <button type='submit'>search</button>
    </form>
  );
};

export default Search;