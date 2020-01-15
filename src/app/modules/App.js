import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../modules/components/Home'
import About from '../modules/components/About'
import NavBar from '../modules/components/NavBar'
import Login from '../modules/components/Login'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/about' component={About}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
  )
}
  
export default App