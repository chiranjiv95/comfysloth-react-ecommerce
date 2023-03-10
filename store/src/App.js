import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute} from './pages';


function App() {
  return <>
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/cart'><Cart/></Route>
        <Route exact path='/products'><Products/></Route>
        <Route exact path='/checkout'><Checkout/></Route>
        <Route exact path='/products/:id'><SingleProduct/></Route>
        <Route exact path='/privateRoute'><PrivateRoute/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
      <Footer/>
    </Router>
  </>
}

export default App
