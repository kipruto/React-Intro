import React from 'react'
import ReactDOM from 'react-dom'

/* A good practice is to put the event handler as a method in the component class */
class Football extends React.Component {
    shoot() {
        alert("Great shot!")
    }

    render() {
        /**For methods in React, the this keyword should represent the component that owns the method */
        return (<button onClick={this.shoot}>Take the shot</button>)
    }
}

ReactDOM.render(<Football />, document.getElementById("root"));
