import React from 'react';
import PokeGrid from './containers/PokeGrid/PokeGrid';
import Header from './navigation/Header/Header';
import PokePopup from './components/PokePopup/PokePopup';
import styles from './App.module.css'

function App (props) {
  return (
    <div className={styles.AppNight}>
      <Header />
      <PokeGrid />
      <PokePopup />
    </div>
  );
}

export default App;
