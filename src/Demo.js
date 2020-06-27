import React, { Component } from 'react';

class Demo extends Component {
    render(){
        return(
            <button onClick={()=>{alert('clicked')}}> Click Me</button>
        )
    }
}

export default Demo