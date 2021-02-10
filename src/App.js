import React from "react";
import "./styles.css";
import { connect } from "react-redux";

import { CLICK } from "./store/action";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ handleClick }) => {
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
    handleClick: () => dispatch({ type: CLICK })
  }
}

export default connect(null, mapDispatchToProps)(App);
