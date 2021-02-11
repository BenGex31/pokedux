import React, { Fragment } from "react";
import { connect } from "react-redux";

const Screen = ({ onScreen }) => {
  if (onScreen.id) {
    return (
      <Fragment>
        <h3 className="screen-name">{onScreen.name}</h3>
        <img alt={onScreen.name} src={onScreen.img} />
      </Fragment>
    );
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  );
};

const mapStateToProps = ({ onScreen }) => {
  return {
    onScreen
  };
};

export default connect(mapStateToProps)(Screen);
