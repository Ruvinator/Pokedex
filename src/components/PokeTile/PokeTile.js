import React from 'react';
import styles from './PokeTile.module.css';

const pokeTile = props => {
    // Hard-coding directory (for now)
    const spriteDir = require('../../assets/images/sprites/black/shiny/' + props.pokeId + '.png');
    return (
        <img src={spriteDir} alt={props.pokeId } className={styles.pokeTileNight} />
    );
}

export default pokeTile;