import React, { useState, useEffect } from "react";
import "./App.css";
import Api from './Api.js'
import { Date } from './Date';
import { Text } from './Text';
import { Refresh } from './Refresh';

function App() {
  const [data,setData] = useState ([])
  const [description, setDescription] = useState ('')
  const [ title,setTitle] = useState ('')

  useEffect (() => {
    Api(setData, setDescription, setTitle)
  }, [])
  return (
    <div className="App">
      <h1> Nasa Pjoto of the Day</h1>
      {/* <img scr="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY */}
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <img src={data} alt={`nasa pic of the day`}></img>
      <Refresh setData={setData} setDescription={setDescription} setTitle={setTitle} />
      <Text description={description} title={title} />
      <Date setData={setData} setDescription={setDescription} setTitle={setTitle} />
    </div>
  );
}

export default Api;
