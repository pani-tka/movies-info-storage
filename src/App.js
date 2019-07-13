import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import  StartPage  from "./pages/start-page";
import AddMoviePage from "./pages/add-movie-page";
import AllMoviePage from "./pages/all-movies-page";
import ImportMoviesPage from './pages/import-movies-page';
import  MovieItem  from "./components/movie-item";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={StartPage} />
        <Route path="/movies/:movieTitle" component={MovieItem} />
        <Route path="/allmovies" component={AllMoviePage} />
        <Route path="/addmovie" component={AddMoviePage} />
        <Route path="/importmovies" component={ImportMoviesPage} />

        
      </BrowserRouter>
    </div>
  );
}

export default App;
