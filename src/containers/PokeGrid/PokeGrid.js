import React, { Component } from 'react';
import PokeTile from '../../components/PokeTile/PokeTile';
import AuxComp from '../../hoc/AuxComp';

class PokeGrid extends Component {
    pokeIds = [];
    pokeTiles = [];

    // Used to temporarily fill list of Pokemon IDs (will be replaced with JSON file)
    fillPokeIds = max => {
        for (let i = 1; i <= max; i++) {
            // Pad number to match filenames (ex. 007)
            this.pokeIds.push(String(i).padStart(3, '0'));
        }
    }

    createTiles = () => {
        this.pokeIds.map(pokeId => {
            this.pokeTiles.push(<PokeTile pokeId={pokeId} key={pokeId} />);
        });
    }

    render() {
        this.fillPokeIds(649);  // Fills list of Pokemon IDs up to selected number
        this.createTiles();
        return (
            <AuxComp>
                {this.pokeTiles}
            </AuxComp>
        );
    }
}

export default PokeGrid;