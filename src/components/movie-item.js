import React, {Component} from "react";
import {connect} from 'react-redux';
//import {fetchSingleMovie} from '../actions';
import {movies} from '../movies';

class MovieItem extends Component {

  render(){
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
  //movies: state.movies
})

const mapDispatchToProps = {
 //fetchSingleMovie
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(MovieItem);