import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemonData: {},
    showShiny: false,
    searchText: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLICKED:
            return {
                ...state,
                pokemonData: action.pokemonData
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
        default:
            return state;
    }
}

export default reducer;