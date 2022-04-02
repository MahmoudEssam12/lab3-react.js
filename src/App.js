import React, { useState } from 'react';
// import Navbar from './components/Navbar';
import MuiNav from './components/MuiNav';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import Favourits from './pages/Favourits';
import NotFound from './pages/NotFound';
import languageContext from "./context/language";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [langContext, setLangContext] = useState("en")
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <MuiNav />
        <div>
          <languageContext.Provider value={{ langContext, setLangContext }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/moviedetails/:id" component={MoviesDetails} />
              <Route path="/favourits" exact component={Favourits} />
              <Route path="*" component={NotFound} />

            </Switch>
          </languageContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
