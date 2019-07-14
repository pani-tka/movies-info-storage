import  React, {Component}  from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
//import {fetchMovies} from '../actions';
import {movies} from '../../movies';
import styles from './all-movies-page.module.scss';

class AllMoviesPage extends Component {

  /*componentDidMount() {
    this.props.fetchMovies();
  }*/
  render() {
    //const {movies} = this.props;

  return(
    <div>
      <div className={styles.movieItemHeader}>See all movies</div>
      {!!movies&&
        movies.map((item) => 
          <div 
            className={styles.movieItem}
            key={item.id}
          >
            <div className={styles.movieTitle}>{item.title}</div>
            <div className={styles.movieYear}>{item.year}</div>
            <div className={styles.movieFormat}>{item.format}</div>
            <Link 
              to={`/movies/${item.title}`}
              className={styles.movieLink}
            >
              See details
            </Link>
          </ div>
        )
      }
    </div>
    )
  }

}
const mapStateToProps = (state) => ({
  //movies: state.movies
})

const mapDispatchToProps = {
  //fetchMovies
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(AllMoviesPage);