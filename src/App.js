import './App.css';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return(
    <div className='app'>
      <Router>
        {/* <Nav/> */}
      <Switch>
        <Route path='/' exact>home</Route>
        <Route path='/news'>news</Route>
        <Route path='/contact'>contact</Route>
        <Route path='/about'>about</Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
