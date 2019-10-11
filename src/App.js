import React from 'react';
import PokeGrid from './containers/PokeGrid/PokeGrid';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.AppNight}>
      <header>Pokedex</header>
      <PokeGrid />
    </div>
  );
}

export default App;
