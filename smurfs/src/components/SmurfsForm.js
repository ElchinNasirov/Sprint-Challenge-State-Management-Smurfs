import React, { useContext, useState } from "react";

// context 
import { SmurfsContext } from "../contexts/SmurfsContext";

const SmurfsForm = () => {

    const [smurfs, setSmurfs] = useState({ name: "", age: 0, heihgt: 0 })
    const { postRequest, deleteRequest } = useContext(SmurfsContext);

    // handling input changes
    const handleChange = (e) => {
        setSmurfs({
            ...smurfs,
            [e.target.name]: e.target.value
        })
    }

    // handling user submission
    const handleSubmit = (e) => {
        e.preventDefault();
        postRequest(smurfs)
        e.target.reset();
    }

    // ------------------------- unfinished -----------------------
    const handleDelete = () => {
        deleteRequest()
    }
    // ------------------------------------------------------------

    return (
        <form onSubmit={handleSubmit}>

            <label>Name:
            <input
                    type="text"
                    name="name"
                    values={smurfs}
                    onChange={handleChange}
                    placeholder="name"
                />
            </label>

            <label>Age:
            <input
                    type="number"
                    name="age"
                    values={smurfs}
                    onChange={handleChange}
                    placeholder="age"
                />
            </label>

            <label>Height:
            <input
                    type="number"
                    name="height"
                    values={smurfs}
                    onChange={handleChange}
                    placeholder="height"
                />
            </label>

            <label>
                <button type="submit">ADD</button>
            </label>

            {/* // ------------------------- unfinished ------------------- */}
            <label>ID:
            <input
                    type="number"
                    name="id"
                    values={smurfs}
                    onChange={handleChange}
                    placeholder="id"
                />
            </label>
            <label>
                <button onClick={handleDelete}>DELETE</button>
            </label>
            {/* // ----------------------------------------------------------*/}

        </form>

    )
}

export default SmurfsForm;