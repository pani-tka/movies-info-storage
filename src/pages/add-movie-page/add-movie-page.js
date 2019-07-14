import  React, {Component}  from "react";
import {connect} from 'react-redux';
import {addMovie} from '../../actions';
import styles from './add-movie-page.module.scss'

class AddMoviePage extends Component {

  state = {
    title: "",
    year: "",
    format: "",
    actors: []
  };

  changeTitle = event => this.setState({ title: event.target.value });

  changeYear = event => this.setState({ year: event.target.value });

  changeFormat = event => this.setState({format: event.target.value});

  handleButton = () => {
    this.props.addMovie(
      this.state.title,
      this.state.year,
      this.state.format
    );
    this.setState({
      title: "",
      year: "",
      format:"",
    });
  };

  render(){
    return(
      <div>
        <form className={styles.addMovieForm}> 
          <div className={styles.inputItem}> 
            Title:
              <input 
                type="text"
                value={this.state.title}
                onChange={this.changeTitle}
                className={styles.addMovieInput}
              />
          </div>
          <div className={styles.inputItem}> 
            Year: 
              <input 
                type="text"
                value={this.state.year}
                onChange={this.changeYear}
                className={styles.addMovieInput}
              />
          </div>
          <div className={styles.selectItem}> 
            Format: 
              <select>
                <option disabled> Select the format </option>
                <option value="1"> VHS </option>
                <option value="2"> DVD </option>
                <option value="3"> Blue Ray </option>
                <option value="4"> IMAX </option>
              </select>
          </div>
          <div className={styles.inputItem}> 
            Actors: 
              <input 
                type = "text"
                className={styles.addMovieInput}
              />
          </div>
          <button
            type="button"
            className={styles.addInput}
          >
            +
          </button>
        </form>
        <button
          type="button"
          onClick={this.handleButton}
          className={styles.saveMovieButton}
        >
          Save Movie
        </button>
      </div>
    )
  }
}
const mapStateToProps = null;

const mapDispatchToProps = {
  addMovie
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(AddMoviePage);