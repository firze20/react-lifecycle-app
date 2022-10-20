import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        const oneSecond = 1000;
        setInterval(() => {
            this.setState({ date: new Date()});
        }, oneSecond)
    }

    render() {
        return(
            <div>
                {this.state.date.toLocaleDateString()}
                <br/>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }

}