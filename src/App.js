import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //   return (
  //     <div className="App">
  //       <p>
  //         Read through the instructions in the README.md file to build your NASA
  //         app! Have fun 🚀!
  //       </p>
  //     </div>
  //   );
  // }

  const [nasaImg, setNasaImg] = useState({ data: [] });
  console.log("Something is Wrong", nasaImg.data);
  const nasa = nasaImg.data;

  useEffect(() => {
    const fetchImg = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
        )
        .then((res) => setNasaImg(res));
    };
    fetchImg();
  }, []);
  return (
    <div className="App">
      <h1 className="heading">NASA Pic of the day!</h1>
      <img src={nasa.url} alt='Nasa Pic of the Day' key={nasaImg} />
      <p className="explanation">{nasa.explanation}</p>
    </div>
  );
}

export default App;
