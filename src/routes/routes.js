import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../pages/login/login'
import { SignUp } from '../pages/signup/signup'
import { NewOrder } from '../pages/hall/new-order/new-order'
import ClientInfo from '../components/hall-components/client-info/client-info'
import { StatusOrder } from '../pages/status-order/status-order'

const PrivateRoute = props => {
  const userToken = localStorage.getItem('userToken')
  return userToken ? <Route {...props} /> : <Redirect to='/' />
}

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} />
      <PrivateRoute path='/new-order' component={NewOrder} />
      <PrivateRoute path='/client-info' component={ClientInfo} />
      <PrivateRoute path='/status-order' component={StatusOrder} />
    </Switch>
  )
}
