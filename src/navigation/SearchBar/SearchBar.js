import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './SearchBar.module.css'

const searchBar = props => {
    // Add search bar text to Redux store
    const handleChange = e => {
        props.onStoreSearchString(e.target.value);
    }

    return <input type='text' placeholder='Search...' className={styles.searchBar} onInput={handleChange} />
}

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onStoreSearchString: (searchText) => dispatch({ type: actionTypes.SEARCH, searchText: searchText })
    };
};

export default connect(null, mapDispatchToProps)(searchBar);