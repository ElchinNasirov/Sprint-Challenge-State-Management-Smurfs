import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// contexts
import { SmurfsContext } from "../contexts/SmurfsContext";

// components
import Smurfs from "../components/Smurfs";
import SmurfsForm from "./SmurfsForm";

const App = () => {

  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [smurfs])

  const postRequest = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteRequest = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <SmurfsContext.Provider value={{ smurfs, postRequest, deleteRequest }} >
      <div className="App">
        <SmurfsForm />
        <Smurfs />
      </div>
    </SmurfsContext.Provider>
  );
}

export default App;
