import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card, CardImg, CardText, CardBody, CardTitle, Spinner } from "reactstrap";
import { Container,Jumbotron } from "reactstrap";

import styled from "styled-components"

import ListGroupItemHeading from "reactstrap/lib/ListGroupItemHeading";
import CardHeader from "reactstrap/lib/CardHeader";

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

  // const MidCard = styled.div`

  // background: red;
  // color:red;

  // `;
  const [nasaImg, setNasaImg] = useState({ data: [] });
  console.log("Something is Wrong", nasaImg.data);
  const nasa = nasaImg.data;

  useEffect(() => {
    const fetchImg = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=XUaWfJMY6fhHXRZ15leZc3QOpkNV2XYBfdyS1IvJ`
        )
        .then((res) => setNasaImg(res));
    };
    fetchImg();
  }, []);

  return (
    // <div className="App">
    //   {/* <h1 className="heading">NASA Pic of the day!</h1>
    //   <img src={nasa.url} alt='Nasa Pic of the Day' key={nasaImg} />
    //   <p className="explanation">{nasa.explanation}</p> */}
    // </div>
    // <col xs ="1" md =""
  
    <Container>
      
      <Card>
        <CardTitle>Nasa pic of the day! </CardTitle>
        <CardImg width="50%" src={nasa.url} alt="Nasa Pic of the Day" />
        <CardText>{nasa.explanation} <Spinner type="grow" color="primary" /> </CardText>
        
      </Card>
     
    </Container>
  );
}

export default App;
