import React from 'react';
import styles from './PokeTile.module.css';

const pokeTile = props => {
    // try/catch since different generations have different cutoffs
    try {
        // Hard-coding directory (for now)
        const spriteDir = require('../../assets/images/sprites/black/shiny/' + props.pokemonKey + '.png');
        return (
            <img src={spriteDir} alt={props.pokemonData['name']} className={styles.pokeTileNight} />
        );
    }
    catch (err) {}

    return null;
}

export default pokeTile;