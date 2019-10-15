const initialState = {
    pokemonData: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('CLICKED'):
            console.log(action.pkmnData['name']);
            return {
                ...state,
                pokemonData: action.pkmnData
            };
        default:
            return state;
    }
}

export default reducer;