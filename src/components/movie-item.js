import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchSingleMovie} from '../actions';

class MovieItem extends Component {

  render(){

    const {movies} = this.props;
    return(
      <div>
        <div>{movies.title}</div>
        <div>{movies.year}</div>
        <div>{movies.format}</div>
        <div>{movies.actors}</div>
        <button
          type="button"
        >
          Remove Movie
        </button>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = {
 fetchSingleMovie
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(MovieItem);