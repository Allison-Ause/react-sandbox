import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* If I put a NavBar here or something, it would display on every page. */}
        <div className="content">
          <Switch>
            {/* Things within the switch change based on the route. */}
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
