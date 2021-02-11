export const CLICK = 'CLICK'
export const FECTH_POKEMON_SUCCESS = "FECTH_POKEMON_SUCCESS"
export const FECTH_POKEMON_PENDING = "FECTH_POKEMON_PENDING"
export const SHOW_POKEMON = "SHOW_POKEMON"

export const fetchPokemonSuccess = (pokemons) => ({
    type: FECTH_POKEMON_SUCCESS,
    pokemons
})

export const fetchPokemonPending = (pokemons) => ({
    type: FECTH_POKEMON_PENDING
})

export const showPokemonAction = pokemons => {
    const random = Math.floor(Math.random() * 10)
    const onScreen = pokemons[random]
    
    return dispatch => {
        dispatch({ type: SHOW_POKEMON, onScreen })
    }
}