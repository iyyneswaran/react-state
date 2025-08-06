import React from 'react';

class Car extends React.Component {

    constructor() {
        super();
        this.state =
        {
            color: 'Green'
        };
    };

    render() {
        return (
            <>
                <h1>My car color is {this.state.color}</h1>
                <button onClick={() => { this.setState({ color: 'Blue'}) }}>Change</button >
            </>
        );
    };
};

export default Car;