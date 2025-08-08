import React from 'react';

class Car extends React.Component {

    constructor() {
        super();
        this.state =
        {
            color: 'Green',
            brand: 'Toyota',
            model: 'Corolla',
            year: '2021'
        };
    };

    render() {
        return (
            <>
                <h1>My Car</h1>
                <p>Color: {this.state.color}</p>
                <p>Brand: {this.state.brand}</p>
                <p>Model: {this.state.model}</p>
                <p>Year: {this.state.year}</p>
                {/* <button onClick={() => { this.setState({ color: 'Blue' }) }}>Change</button > */}
                <button onClick={() => { this.setState((previousState) => { return { ...previousState, color: "Blue" } }) }}> click here </button>
            </>
        );
    };
};

export default Car;