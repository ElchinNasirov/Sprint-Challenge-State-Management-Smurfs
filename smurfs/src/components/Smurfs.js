import React, { useContext } from "react";

// contexts
import { SmurfsContext } from "../contexts/SmurfsContext";

const Smurfs = () => {

    const { smurfs } = useContext(SmurfsContext);

    return (
        <div>
            {smurfs.map(smurf => (
                <div className="smurf" key={smurf.id}>
                    <p> <b>Name:</b> {smurf.name} </p>
                    <p> <b>Age:</b> {smurf.age} years old</p>
                    <p> <b>Height:</b> {smurf.height} cm </p>
                    <p> <b>ID:</b> {smurf.id} </p>
                </div>
            ))}
        </div>
    )
}

export default Smurfs;