import React from 'react';
import PokeGrid from './containers/PokeGrid/PokeGrid';
import SearchBar from './navigation/SearchBar/SearchBar';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actionTypes';
import styles from './App.module.css'

function App (props) {
  return (
    <div className={styles.AppNight}>
      <SearchBar />
      <button onClick={() => props.onToggleShinyPokemon()}>Toggle Shiny</button>
      <PokeGrid />
    </div>
  );
}

// Actions to dispatch
const mapDispatchToProps = dispatch => {
  return {
      onToggleShinyPokemon: () => dispatch({ type: actionTypes.TOGGLE_SHINY})
  };
};

export default connect(null, mapDispatchToProps)(App);
