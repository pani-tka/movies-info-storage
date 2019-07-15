import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import styles from './import-movies-page.module.scss';

class ImportMoviesPage extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className={styles.container}>
            <p className={styles.dropTitle}>Select the import file: </p>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} className={styles.dropzoneInput}/>
              <p className={styles.dropDescription}>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <ul>{files}</ul>
              <button 
                type="button"
                className={styles.uploadBatton}
              >
                UPLOAD
              </button>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default ImportMoviesPage;