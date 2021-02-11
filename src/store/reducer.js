import initialState from './initialState'
import { CLICK, FECTH_POKEMON_PENDING, FECTH_POKEMON_SUCCESS } from "./action";

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                click: state.click + 1
            }
        case FECTH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons,
                pending: false
            }
            case FECTH_POKEMON_PENDING:
            return {
                ...state,
                pending: true
            }
        default:
            return state;
    }
};

export default reducer