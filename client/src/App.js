import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import './styles.scss'
import Navbar from './components/Navbar'
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page" component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  )
}

export default App
