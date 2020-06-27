import React, { Component } from "react";
import Die from "./Die";
import './RollDice.css'

class RollDice extends Component {
  state = {
    die1: "fas fa-dice-one",
    die2: "fas fa-dice-one",
  };

  rollBtnClick() {
    document.getElementById("rollBtn").innerText = "Rolling...";
    document.getElementById("rollBtn").setAttribute("disabled", "disabled");
    document.getElementsByClassName('RollDice-Container')[0].className += ' rolling'
    setTimeout(() => {
        this.randomDieNum()
      document.getElementById("rollBtn").innerText = "Roll Dice";
      document.getElementById("rollBtn").removeAttribute("disabled");
      document.getElementsByClassName('RollDice-Container')[0].classList.remove('rolling')
    }, 1000);
  }

  convertToClassName(num) {
    if (num === 1) return "fas fa-dice-one";
    if (num === 2) return "fas fa-dice-two";
    if (num === 3) return "fas fa-dice-three";
    if (num === 4) return "fas fa-dice-four";
    if (num === 5) return "fas fa-dice-five";
    if (num === 6) return "fas fa-dice-six";
  }

  randomDieNum() {
    let die1 = this.convertToClassName(Math.floor(Math.random() * 5 + 1));
    let die2 = this.convertToClassName(Math.floor(Math.random() * 5 + 1));

    this.setState({
        die1,
        die2,
    });
  }

  render() {
    return (
      <div className="RollDice">
       <div className="RollDice-Container">
       <Die classN={this.state.die1}> </Die>
        <Die classN={this.state.die2}> </Die>
       </div>
        <button id="rollBtn" onClick={this.rollBtnClick.bind(this)}>
          Roll Dice
        </button>
      </div>
    );
  }
}

export default RollDice;
