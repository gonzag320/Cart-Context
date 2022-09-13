import React from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import {HomeContainer, Cart} from './components'
import {MyContext} from './Context'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/cart'>
        Cart:{' '}
        <MyContext.Consumer>
          {({state: {cart}}) => <b>{cart.length}</b>}
        </MyContext.Consumer>
      </NavLink>
    </li>
  </ul>
)

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
