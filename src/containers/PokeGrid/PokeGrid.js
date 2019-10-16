import React, { Component } from 'react';
import PokeTile from '../../components/PokeTile/PokeTile';
import { connect } from 'react-redux';
import pokeData from '../../data/PokeData.json'
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './PokeGrid.module.css';

class PokeGrid extends Component {
    constructor (props) {
        super(props);
        this.createTiles();
    }
    maxPokeNum = 649;
    pokeTiles = [];

    // Prevent unnecessary re-rendering
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showShiny !== this.props.showShiny;
    }

    createTiles = () => {
        for (let i = 1; i <= this.maxPokeNum; i++) {
            const pokeKey = String(i).padStart(3, '0');
            this.pokeTiles.push(<PokeTile pokemonData={pokeData[pokeKey]} pokemonKey={pokeKey} key={pokeKey} isShiny={this.props.showShiny} clicked={() => this.props.onGetClickedPokemon(pokeData[pokeKey])} />);
        }
    }

    updateTiles = () => {
        this.pokeTiles = [];
        this.createTiles();
    }

    render() {
        this.updateTiles();

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
        pokemonData: state.pokemonData,
        showShiny: state.showShiny
    };
};

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onGetClickedPokemon: (clickData) => dispatch({ type: actionTypes.CLICKED, pokemonData: clickData })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeGrid);