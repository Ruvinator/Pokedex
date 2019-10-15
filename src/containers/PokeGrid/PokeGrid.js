import React, { Component } from 'react';
import PokeTile from '../../components/PokeTile/PokeTile';
import { connect } from 'react-redux';
import pokeData from '../../data/PokeData.json'
import styles from './PokeGrid.module.css';

class PokeGrid extends Component {
    maxPokeNum = 649;
    pokeTiles = [];
    createdTiles = false;

    createTiles = () => {
        for (let i = 1; i <= this.maxPokeNum; i++) {
            const pokeKey = String(i).padStart(3, '0');
            this.pokeTiles.push(<PokeTile pokemonData={pokeData[pokeKey]} pokemonKey={pokeKey} key={pokeKey} clicked={() => this.props.onGetClickedPokemon(pokeData[pokeKey])} />);
        }
        this.createdTiles = true;
    }

    render() {
        if (!this.createdTiles) {
            this.createTiles();
        }

        return (
            <div className={styles.pokeGrid}>
                {this.pokeTiles}
            </div>
        );
    }
}

// Accesses global (redux) state for properties this component is interested in
const mapStateToProps = state => {
    return {
        pkmnData: state.pokemonData
    };
};

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onGetClickedPokemon: (clickData) => dispatch({type: 'CLICKED', pkmnData: clickData})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeGrid);