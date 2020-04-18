import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Spinner,
} from "reactstrap";
import { Container, Jumbotron } from "reactstrap";

import styled from "styled-components";

function App() {

 
  
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

  const MidCard = styled.div`
  margin: auto;
  padding-top: 20px;
  padding-button: 20px;
  background-color: #716f9d;
`;
const MidCard = styled.card-text `
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
  return (
    <MidCard>
      <Container>
        <CardTitle>Nasa pic of the day! </CardTitle>
        <CardImg src={nasa.url} alt="Nasa Pic of the Day" />
        <CardText>
          {nasa.explanation} <Spinner type="grow" color="primary" />{" "}
        </CardText>
      </Container>
    </MidCard>
  );
}

export default App;
