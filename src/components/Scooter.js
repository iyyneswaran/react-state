import { useState } from 'react';

function Scooter() {

    // const [color, setColor] = useState("Red");
    // const [brand, setBrand] = useState("Honda");
    // const [model, setModel] = useState("Activa 6G");
    // const [year, setYear] = useState("2020");


    // Using a single state object to manage multiple properties
    const [scooter, setScooter] = useState(
        {
            color: "Red",
            brand: "Honda",
            model: "Activa 6G",
            year: "2020"
        }
    );

    // function updateColor() {
    //     setScooter({ color: "Blue" });
    // };

    function updateColor() {
        setScooter((previousState) => {
            return {...previousState, color: "Blue"}; //spread operator to keep other properties intact
        });
    };

    console.log('Current scooter state:', scooter);

    return (
        <>
            <h1>My Scooter</h1>
            <p>Color: {scooter.color}</p>
            <p>Brand: {scooter.brand}</p>
            <p>Model: {scooter.model}</p>
            <p>Year: {scooter.year}</p>
            <button onClick={updateColor}>Change color</button>
            {/* <button onClick={() => {setScooter({color: "Blue"})}}>Change color</button> */}
        </>
    );
};

export default Scooter;