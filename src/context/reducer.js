import productData from '../products.json'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToCart': {
      const { data, cart } = state
      const check = cart.every(elem => elem.id !== action.payload)
      if (!check) {
        alert('продук добавлен!')
      } else {
        const product = data.find(elem => elem.id === action.payload)
        const newItem = { ...product, count: 1 }
        const newArr = [...cart, newItem]
        return {
          ...state,
          cart: newArr
        }
      }
    }
    case 'toggleTitle':{
      const {id, text} = action.payload
      const newArr = productData.filter(elem => elem.category_id === id)
      return{
        ...state,
        data:newArr,
        title: text
      }
    }
    case 'toggleDiscount':{
      const newArr = productData.filter(elem => elem.discount !== null)
      return{
        ...state,
        data:newArr
      }
    }
    case 'searchData' : {
      const {payload} = action
      const newArr = productData.filter(elem => {
        return elem.title.toLowerCase().indexOf(payload.toLowerCase()) > -1
      })
      return{
        ...state,
        data:newArr
      }
    }
    case 'deleteProduct': {
      const { cart } = state;
      const { payload } = action
      const newArr = cart.filter(elem => elem.id !== payload)
      return {
        ...state,
        cart: newArr
      }
    }
    case 'min': {
      const { cart } = state
      const { payload } = action
      const newArr = cart.map(elem => elem.id === payload ? {
        ...elem,
        count: elem.count === 1 ? 1 : elem.count - 1,
      } : elem)
      return {
        ...state,
        cart: newArr
      }
    }
    case 'plus': {
      const { cart } = state
      const newArr = cart.map(elem => elem.id === action.payload ? {
        ...elem,
        count: elem.count + 1,
      } : elem)
      return {
        ...state,
        cart: newArr
      }
    }
    case 'removeCart' : {
      return{
        ...state,
        cart: []
      }
    }
    case 'checkOpen': {
      return{
        ...state,
        checkOpen:action.payload
      }
    }
    case 'setLoading': {
      return{
        ...state,
        loading:action.payload
      }
    }
    case 'setOpen': {
      return{
        ...state,
        open:action.payload
      }
    }
    default:
      return state
  }
}