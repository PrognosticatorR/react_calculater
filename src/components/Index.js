import React, { Component } from "react";
import "./Calculater.css";
import Display from "./Display";
import calculate from "../calculate/calculate";
import ButtonPanel from "./ButtonPanel";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
      operation: null
    };
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div className="calc_container">
        <h6 className="heading">Calculater</h6>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
