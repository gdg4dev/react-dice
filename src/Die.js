import React, { Component } from 'react'
import './Die.css'

export class Die extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <i className={'Die ' +this.props.classN}></i>
            </div>
        )
    }
}

export default Die
