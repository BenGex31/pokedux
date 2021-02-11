import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";

import { CLICK } from "./store/action";
import fetchPokemons from './store/fetchPokemon'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ handleClick, fetchPokemons, pending }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <p>Chargement...</p>
  }

  return (
    <div className="App">
      <button onClick={() => handleClick()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ pending }) => {
  return {
    pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    handleClick: () => dispatch({ type: CLICK })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
