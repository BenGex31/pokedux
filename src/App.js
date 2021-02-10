import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";

import { CLICK } from "./store/action";
import fetchPokemons from './store/fetchPokemon'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ handleClick, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])
  
  return (
    <div className="App">
      <button onClick={() => handleClick()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    handleClick: () => dispatch({ type: CLICK })
  }
}

export default connect(null, mapDispatchToProps)(App);
