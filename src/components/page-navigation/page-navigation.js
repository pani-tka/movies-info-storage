import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './page-navigation.module.scss';

class PageNavigation extends Component {
  render(){
    return(
      <div className={styles.navigation}>
        <Link to="/" className={styles.mainNavigationLink}>Yours Movie DB</Link>
        <div className={styles.navigationLinks}>
          <Link to="/allmovies" className={styles.navigationLink}>All Movies</Link>
          <Link to="/addmovie" className={styles.navigationLink}>Add Movie</Link>
          <Link to="/importmovies" className={styles.navigationLink}>Import Movie</Link>
        </div>
      </div>
    )
  }
}
export default PageNavigation;