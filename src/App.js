import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './comp/Index'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
