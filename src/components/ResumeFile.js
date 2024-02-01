import React from 'react';
import { Frame } from "@react95/core";

const ResumeFile = (content) => {
  return (
    <Frame bg="white" boxShadow="in" className="frame-container-folder">
      <img id='resume' src={content["content"][0]} alt={content["content"][1]}></img>
    </Frame>
  );
}

export default ResumeFile;
