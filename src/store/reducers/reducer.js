import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemonData: {},
    showShiny: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.CLICKED):
            console.log(action.pokemonData['name']);
            return {
                ...state,
                pokemonData: action.pokemonData
            };
        case (actionTypes.TOGGLE_SHINY):
            return {
                ...state,
                showShiny: !state.showShiny
            }
        default:
            return state;
    }
}

export default reducer;