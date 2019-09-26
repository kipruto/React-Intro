import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "Red"
        };
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({favouriteColor: "Orange"})
        }, 3000);
    }
    render() {
        return (
            <h1>My favorite color is {this.state.favouriteColor}</h1>
        );
    }

}

ReactDOM.render(<Header favCol="Green" />, document.getElementById("root"));
