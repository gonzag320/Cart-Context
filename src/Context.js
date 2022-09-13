import React, {createContext, Component} from 'react'

export const MyContext = createContext()

export default class ContextProvider extends Component {
  state = {
    products: [
      {
        name: 'github stickers',
        price: 2
      },
      {
        name: 'pollo chillón (despierta armandos)',
        price: 40
      },
      {
        name: 'github mug',
        price: 10
      }
    ],
    cart: []
  }
  addProducts = product => {
    this.setState(prev => ({products: [...prev.products, product]}))
  }
  addToCart = product => {
    this.setState(prev => ({cart: [...prev.cart, product]}))
  }
  render() {
    const {addProducts, addToCart} = this
    return (
      <MyContext.Provider value={{state: this.state, addProducts, addToCart}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
