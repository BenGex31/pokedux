export const CLICK = 'CLICK';
export const FECTH_POKEMON_SUCCESS = "FECTH_POKEMON_SUCCESS";
export const FECTH_POKEMON_PENDING = "FECTH_POKEMON_PENDING";
export const SHOW_POKEMON = "SHOW_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";


export const fetchPokemonSuccess = (pokemons) => ({
    type: FECTH_POKEMON_SUCCESS,
    pokemons
});

export const fetchPokemonPending = (pokemons) => ({
    type: FECTH_POKEMON_PENDING
});

export const showPokemonAction = pokemons => {
    const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch);
    const max = filteredPokemons.length;
    const random = Math.floor(Math.random() * max);

    const onScreen = filteredPokemons[random];
    
    return dispatch => {
        dispatch({ type: SHOW_POKEMON, onScreen });
    };
};

export const catchPokemonAction = () => {
    console.log('catch');
    const random = Math.floor(Math.random() * 255);
    
    return dispatch => {
        dispatch({ type: CATCH_POKEMON, random });
    };
};