import React from 'react'
import ReactDOM from 'react-dom'

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand.model}!</h2>
    }
}

class Garage extends React.Component {
    render() {
        const carinfo = { name: "Toyota", model: "Premio" }
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfo} />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById("root"));
