import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemonData: {},
    pokemonMaxStats: {
        HP: 0,
        Attack: 0,
        Defense: 0,
        SpAtk: 0,
        SpDef: 0,
        Speed: 0
    },
    pokemonKey: '',
    showShiny: false,
    searchText: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLICKED:
            return {
                ...state,
                pokemonData: action.pokemonData,
                pokemonKey: action.pokemonKey
            };
        case actionTypes.TOGGLE_SHINY:
            return {
                ...state,
                showShiny: action.toggleChecked
            }
        case actionTypes.SEARCH:
            return {
                ...state,
                searchText: action.searchText
            }
        case actionTypes.UPDATE_MAX:
            if (action.pokemonData['hp'] > state.pokemonMaxStats['HP']) {
                state.pokemonMaxStats['HP'] = action.pokemonData['hp'];
            }
            if (action.pokemonData['attack'] > state.pokemonMaxStats['Attack']) {
                state.pokemonMaxStats['Attack'] = action.pokemonData['attack'];
            }
            if (action.pokemonData['defense'] > state.pokemonMaxStats['Defense']) {
                state.pokemonMaxStats['Defense'] = action.pokemonData['defense'];
            }
            if (action.pokemonData['spatk'] > state.pokemonMaxStats['SpAtk']) {
                state.pokemonMaxStats['SpAtk'] = action.pokemonData['spatk'];
            }
            if (action.pokemonData['spdef'] > state.pokemonMaxStats['SpDef']) {
                state.pokemonMaxStats['SpDef'] = action.pokemonData['spdef'];
            }
            if (action.pokemonData['speed'] > state.pokemonMaxStats['Speed']) {
                state.pokemonMaxStats['Speed'] = action.pokemonData['speed'];
            }
            return {
                ...state
            }

        default:
            return state;
    }
}

export default reducer;