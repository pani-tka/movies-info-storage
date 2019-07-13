import  React, {Component}  from "react";

class AddMoviePage extends Component {


  render(){
    return(
      <div>
        <form>
          <p>Title: </p>
          <input type="text"></input>
          <p>Year: </p>
          <input type = "text"></input>
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
        >
          Save Movie
        </button>
      </div>
    )
  }
}
export default AddMoviePage;