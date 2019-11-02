import React, { Component } from 'react';
import PokeTile from '../../components/PokeTile/PokeTile';
import { connect } from 'react-redux';
import pokeData from '../../data/PokeData.json'
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './PokeGrid.module.css';

class PokeGrid extends Component {
    constructor(props) {
        super(props);
        this.createTiles();
    }
    maxPokeNum = 649;
    pokeTiles = [];

    // Prevent unnecessary re-rendering
    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.showShiny  !== this.props.showShiny ||
            nextProps.searchText !== this.props.searchText
        );
    }

    createTiles = () => {
        let maxStatsInitialized = false;
        if (this.props.pokemonMaxStats['HP'] > 0) {
            maxStatsInitialized = true;
        }

        for (let i = 1; i <= this.maxPokeNum; i++) {
            const pokeKey = String(i).padStart(3, '0');
            if (this.isSearchMatch(pokeData[pokeKey])) {
                this.pokeTiles.push(<PokeTile pokemonData={pokeData[pokeKey]} pokemonKey={pokeKey} key={pokeKey} isShiny={this.props.showShiny} clicked={() => this.clickTileHandler(pokeData[pokeKey], pokeKey)} />);
                if (!maxStatsInitialized) {
                    this.props.onCheckMaxStats(pokeData[pokeKey]);
                }
            }
        }
    }

    clickTileHandler = (pokeClicked, pokeClickedKey) => {
        this.props.onGetClickedPokemon(pokeClicked, pokeClickedKey);
    }
    
    isSearchMatch = pokemon => {
        const searchPhrase = this.props.searchText.toLowerCase();
        return (
            pokemon['name'].toLowerCase().includes(searchPhrase)  ||
            pokemon['type1'].toLowerCase().includes(searchPhrase) ||
            (pokemon['type2'] !== undefined ? pokemon['type2'].toLowerCase().includes(searchPhrase) : false) ||
            (pokemon['legendary'] && 'legendary'.includes(searchPhrase))
        );
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
        pokemonMaxStats: state.pokemonMaxStats,
        showShiny: state.showShiny,
        searchText: state.searchText
    };
};

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onGetClickedPokemon: (clickData, clickKey) => dispatch({ type: actionTypes.CLICKED, pokemonData: clickData, pokemonKey: clickKey }),
        onCheckMaxStats:     (checkData)           => dispatch({ type: actionTypes.UPDATE_MAX, pokemonData: checkData})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeGrid);