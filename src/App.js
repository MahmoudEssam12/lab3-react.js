import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import Favourits from './pages/Favourits';
import NotFound from './pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/moviedetails/:id" component={MoviesDetails} />
            <Route path="/favourit" exact component={Favourits} />
            <Route path="*" component={NotFound} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
