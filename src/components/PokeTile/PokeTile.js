import React from 'react';
import { typeColors } from '../../data/TypeColors/TypeColors';
import styles from './PokeTile.module.css';

const pokeTile = props => {
    // try/catch since different generations have different cutoffs
    try {
        // Hard-coding directory (for now)
        const shinyDir = props.isShiny ? 'shiny' : 'normal';
        const spriteDir = require('../../assets/images/sprites/black/' + shinyDir + '/' + props.pokemonKey + '.png');
        const style1 = {backgroundColor: typeColors[props.pokemonData['type1']]};
        const style2 = {backgroundColor: typeColors[props.pokemonData['type2']]};
        return (
            <div className={styles.pokeTileNight} onClick={props.clicked}>
                <img src={spriteDir} alt={props.pokemonData['name']} />
                <div className={styles.typeDiv}>
                    <p className={styles[props.pokemonData['type1']]} style={style1}>{props.pokemonData['type1']}</p>
                    {props.pokemonData['type2'] ? <p className={styles[props.pokemonData['type2']]} style={style2}>{props.pokemonData['type2']}</p> : null}
                </div>
            </div>
        );
    }
    catch (err) {}

    return null;
}

export default pokeTile;