import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import NavBar from './components/NavBar/NavBar';
import Spells from './components/Spells/Spells';
import Familiars from './components/Familiars/Familiars';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* If I put a NavBar here or something, it would display on every page. */}
        <div className="content">
          <Switch>
            {/* Things within the switch change based on the route. */}
            <Route path="/create" component={Create} />
            <Route path="/familiars" component={Familiars}/>
            <Route path="/spells" component={Spells} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
