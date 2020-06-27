import React, { Component } from 'react';

class ButtonClick extends Component {
    state = { 
        newNum: 0
    }

    randNum(){
        this.setState({newNum: Math.floor(Math.random() * 10)})
    }
    render(){
        return(
            <div>
                <h1>{this.state.newNum}</h1>
                {this.state.newNum === 7 ? <h2>YOU WIN!</h2> :  <button onClick={this.randNum.bind(this)}>Random Number</button>  }
            </div>
        )
    }
}

export default ButtonClick