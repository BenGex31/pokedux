export const CLICK = 'CLICK'
export const FECTH_POKEMON_SUCCESS = "FECTH_POKEMON_SUCCESS"

export const fetchPokemonSuccess = (pokemons) => ({
    type: FECTH_POKEMON_SUCCESS,
    pokemons
})