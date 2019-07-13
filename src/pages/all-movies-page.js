import  React, {Component}  from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import MovieItem from '../components/movie-item';
import {fetchMovies} from '../actions';

class AllMoviesPage extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const {movies} = this.props;
    console.log(this.props)

  return(
    <div>
      <div>See all movies</div>
      {!!movies&&
        movies.map((item) => 
          <MovieItem key={item.id}>
            <div>{item.title}</div>
            <div>
              Year: 
              <div>{item.year}</div>
            </div>
            <div>
              Format: 
              <div>{item.year}</div>
            </div>
            <Link to={`/movies/${item.title}`}>
              See details
            </Link>
          </MovieItem>
        )
      }
    </div>
    )
  }

}
const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(AllMoviesPage);