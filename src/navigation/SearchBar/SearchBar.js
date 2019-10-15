import React from 'react';
import styles from './SearchBar.module.css'

const searchBar = props => {
    // Add search bar text to Redux store
    return <input type='text' placeholder='Search...' className={styles.searchBar} />
}

export default searchBar;