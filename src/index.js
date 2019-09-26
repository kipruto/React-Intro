import React from 'react'
import ReactDOM from 'react-dom'

function shoot() {
    alert("Great shot!");
}

const myElement = (<button onClick={shoot}>Take the shot!</button>)

ReactDOM.render(myElement, document.getElementById("root"));
