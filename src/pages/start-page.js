import React, {Component}  from "react";
import {connect} from "react-redux";
import {searchTextChanged,fetchSingleMovie} from "../actions";
import styles from './start-page.module.scss';

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
        <div className={styles.headerTitle}>Yours Movie DB</div>
          <div>
            <input 
              type = "text"
              value = {queryText}
              onChange = {this.onChange} 
              className={styles.inputField}
            />
            <div>
            <label className={styles.checkboxLabel}>
              Filter by title
                <input 
                  type="checkbox" 
                />
            </label>
            <label className={styles.checkboxLabel}>
              Filter by actor
                <input 
                  type="checkbox" 
                />
            </label>
          </div>
            <button 
              type="button"
              onClick = {this.onClick}
              className={styles.searchButton}
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
