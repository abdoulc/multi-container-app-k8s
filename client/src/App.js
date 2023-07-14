import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Mypage from './Mypage';
import Fibonacci from './Fibonacci';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>FIB Calculator v2</h1>
          <Link to="/">Home</Link>
          <Link to="/mypage">Custom page</Link>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Fibonacci}/>
            <Route  path="/mypage" component={Mypage}/>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
