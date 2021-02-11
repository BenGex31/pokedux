export const CLICK = 'CLICK'
export const FECTH_POKEMON_SUCCESS = "FECTH_POKEMON_SUCCESS"
export const FECTH_POKEMON_PENDING = "FECTH_POKEMON_PENDING"

export const fetchPokemonSuccess = (pokemons) => ({
    type: FECTH_POKEMON_SUCCESS,
    pokemons
})

export const fetchPokemonPending = (pokemons) => ({
    type: FECTH_POKEMON_PENDING
})