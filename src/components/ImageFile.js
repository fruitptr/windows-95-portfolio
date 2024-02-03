import React from 'react'
import './Window.css'
import { Frame } from "@react95/core";

const ImageFile = (content) => {
    console.log("Image content: ", content)
  return (
    <Frame bg="white" boxShadow="in" className="frame-container">
      <img id='poloroid' src={content["content"][0]} alt={content["content"][1]}></img>
    </Frame>
  )
}

export default ImageFile