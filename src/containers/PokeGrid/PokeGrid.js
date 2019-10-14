import React, { Component } from 'react';
import PokeTile from '../../components/PokeTile/PokeTile';
import AuxComp from '../../hoc/AuxComp';
import pokeData from '../../data/PokeData.json'

class PokeGrid extends Component {
    pokeTiles = [];
    maxPokeNum = 649;

    createTiles = () => {
        let pokeKey;
        for (let i = 1; i <= this.maxPokeNum; i++) {
            pokeKey = String(i).padStart(3, '0');
            this.pokeTiles.push(<PokeTile pokemonData={pokeData[pokeKey]} pokemonKey={pokeKey} key={pokeKey} />);
        }
    }

    render() {
        this.createTiles();
        return (
            <AuxComp>
                {this.pokeTiles}
            </AuxComp>
        );
    }
}

export default PokeGrid;