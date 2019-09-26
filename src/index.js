import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "Red"
        };
    }
    static getDerivedStateFromProps(props, state) {
        return { favouriteColor: props.favCol };
    }
    render() {
        return (
            <h1>My favorite color is {this.state.favouriteColor}</h1>
        );
    }

}

ReactDOM.render(<Header favCol="Green" />, document.getElementById("root"));
