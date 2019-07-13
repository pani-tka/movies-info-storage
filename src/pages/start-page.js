import  React, {Component}  from "react";
import { Link } from "react-router-dom";
//import MovieItem from "../components/movie-item";
import {connect} from "react-redux";
import {searchTextChanged,fetchSingleMovie} from "../actions";

class StartPage extends Component {

  onChange = event => {
    const queryText = event.target.value;
    this.props.searchTextChanged(queryText);
  };

  onClick = () => {
    this.props.fetchSingleMovie();
  }

  render(){
    const {queryText} = this.props;

    return (
      <div>
        <button
        type="button"
        >
        <Link to="/allmovies">All Movies</Link>
        </button>
        <button
        type="button"
        >
        <Link to="/addmovie">Add Movie</Link>
        </button>
        <button
        type="button"
        >
        <Link to="/importmovies">Import Movie</Link>
        </button>
        <div>Yors Movie DB</div>
        <div>
          <input 
            type = "text"
            placehloder = "Type to search..."
            value = {queryText}
            onChange = {this.onChange} 
          />
          <button 
            type="button"
            onClick = {this.onClick}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
   movie: state.movie
})

const mapDispatchToProps = {
  searchTextChanged,
  fetchSingleMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage);
