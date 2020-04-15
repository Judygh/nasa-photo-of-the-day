// import React from 'react'
import axios from "axios";

function Api (setData, setDescription, setTitle, data) {
  if (data === undefined) {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
        // `https://api.nasa.gov/planetary/apod?api_key=tvDmfl6yqNkfRXh7OgyDNNS5T1PXVp2dq6XK9hLC`
      )
      .then((res) => {
        console.log(res.data);

        setData(res.data.url);
        setDescription(res.data.explanation);
        setTitle(res.data.title);
      })
      .catch((err) => console.log(err));
  }
}
export default Api