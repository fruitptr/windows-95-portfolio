import { Frame, Button } from "@react95/core";
import "./Window.css";
import { useState } from "react";
import styled from 'styled-components'

const StyledButton = styled.span`
    height: 50px;
    margin: 10px;
    margin-top: 30%;
`

function Notepad({ content }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [,...images] = content[2]["content"];
  console.log("Images: ", images);

  const handlePrevClick = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <Frame bg="white" boxShadow="in" className="frame-container">
      <div id="me">
      <h1 style={{ textAlign: "center" }}>{content[0]["content"]}</h1>
      <img src={content[2]["content"][0]["src"]} alt="Me."></img></div>
      {content[1]["content"].map((item, index) => {
        return (
          <p key={index}>
            {item}
          </p>
        );
      })}
      <div className="carousel">
        <StyledButton><Button onClick={handlePrevClick}>{"⮘"}
        </Button></StyledButton>
        <div className="image-card">
          <img src={images[imageIndex]["src"]} alt=""></img>
          <p>{images[imageIndex]["alt"]}</p>
        </div>
        <StyledButton><Button onClick={handleNextClick}>{"⮚"}
        </Button></StyledButton>
      </div>
    </Frame>
  );
}

export default Notepad;
