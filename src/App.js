import React from 'react';
import PokeGrid from './containers/PokeGrid/PokeGrid';
import SearchBar from './navigation/SearchBar/SearchBar';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.AppNight}>
      <SearchBar />
      <PokeGrid />
    </div>
  );
}

export default App;
