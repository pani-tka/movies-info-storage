import  React, {Component}  from "react";
import { Link } from "react-router-dom";
import MovieItem from "./index";

class MovieList extends Component {

  render(){
    return (
      <div>
        <div>MovieList
          <MovieItem></MovieItem>
        </div>
        <Link to="/movies/1">movies 1</Link>
        <Link to="/movies/2">movies 2</Link> 
      </div>
    )
  }
}
export default MovieList;