import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import  MoviesControl  from "./components/movies-control";
import  MovieItem  from "./components/movie-item";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MoviesControl} />
        <Route path="/movies/:movieTitle" component={MovieItem} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
