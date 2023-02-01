import { store } from "./store";
import { reducer } from "./reducer";
import { useReducer } from "react";
import Product from '../products.json';
import { categories } from "../categories";

const defaultState = {
  data: Product,
  list: categories,
  title: '',
  cart: JSON.parse(localStorage.getItem("cart-product")) || [],
  open: false,
  checkOpen: false,
  loading: false,

}

const State = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const toggleTitle = (id, text) => {
    dispatch({type:'toggleTitle',payload:{id, text}})
  }
  const toggleDiscount = () => {
    dispatch({type:'toggleDiscount'})
  }
  const searchData = (text) => {
    dispatch({type:'searchData',payload:text})
  }

  const addToCart = (id) => {
    dispatch({type: 'addToCart', payload: id})
  }
  const deleteProduct = (id) => {
    dispatch({type: 'deleteProduct',payload:id})
  }
  const min = (id) => {
    dispatch({type:'min',payload:id})
  }
  const plus = (id) => {
    dispatch({type:'plus',payload:id})
  }
  const checkOpen1 = (bool) => {
    dispatch({type: 'checkOpen', payload: bool})
  }
  const removeCart = () => {
    localStorage.removeItem('cart-product')
    dispatch({type: 'removeCart'})
    checkOpen1(false)
  }

  const setOpen = (bool) => {
    dispatch({type:'setOpen',payload:bool})
  }

  const setLoading = (bool) => {
    dispatch({type:'setLoading',payload:bool})
  }

  const byProduct = () => {
    setLoading(true)
    setTimeout(() => {
      setOpen(false)
      checkOpen1(true)
      setLoading(false)
    }, 3000)
  }

  const totalProduct = state.cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <store.Provider value={{
      data: state.data,
      list: state.list,
      title: state.title,
      cart: state.cart,
      open: state.open,
      checkOpen: state.checkOpen,
      loading: state.loading,
      toggleTitle,
      toggleDiscount,
      addToCart,
      deleteProduct,
      searchData,
      min,
      plus,
      removeCart,
      totalProduct,
      checkOpen1,
      setLoading,
      setOpen,
      byProduct,
    }}>
      {children}
    </store.Provider>
  )
}

export default State;