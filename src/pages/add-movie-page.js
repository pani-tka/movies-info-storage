import  React, {Component}  from "react";
import {connect} from 'react-redux';
import {addMovie} from '../actions';

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
        <form>
          <p>Title: </p>
          <input 
            type="text"
            value={this.state.title}
            onChange={this.changeTitle}
            placeholder="Title"
          />
          <p>Year: </p>
          <input 
            type="text"
            value={this.state.year}
            onChange={this.changeYear}
            placeholder="Title"
          />
          <p>Format: </p>
          <select>
            <option disabled> Select the format </option>
            <option value="1"> VHS </option>
            <option value="2"> DVD </option>
            <option value="3"> Blue Ray </option>
            <option value="4"> IMAX </option>
          </select>
          <p>Actors: </p>
          <input type = "text"></input>
          <input type = "text"></input>
          <button
            type="button"
          >
            Add input
          </button>
        </form>
        <button
          type="button"
          onClick={this.handleButton}
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