import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './Header.module.css';

const header = props => {
    const handleShinyToggle = e => {
        props.onToggleShinyPokemon(e.target.checked);
    }

    return (
        <div className={styles.Header}>
            <ToggleSwitch toggled={handleShinyToggle} />
            <SearchBar />
        </div>
    )
}

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onToggleShinyPokemon: (toggleChecked) => dispatch({ type: actionTypes.TOGGLE_SHINY, toggleChecked })
    };
};

export default connect(null, mapDispatchToProps)(header);