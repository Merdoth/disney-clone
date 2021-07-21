import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing/LandingPage";
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
