import  React, {Component}  from "react";
import MovieList from "./movie-list";
import {connect} from "react-redux";
import {searchTextChanged} from "../actions";

class MoviesControl extends Component {

  onChange = event => {
    const queryText = event.target.value;
    this.props.searchTextChanged(queryText);
  };

  render(){
    const {queryText} = this.props;

    return (
      <div>
        <div>Movies search</div>
        <div>
          <input 
            type = "text"
            placehloder = "Type to search..."
            value = {queryText}
            onChange = {this.onChange} />
        </div>
        <button 
          type="button"
          onClick = {this.onClick}
        >
          Search  
        </button>
        <button type="button">
          Add Movie
        </button>
        <MovieList></MovieList>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
   state
})

const mapDispatchToProps = {
  searchTextChanged,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesControl);
