import { Frame } from "@react95/core";
import "./Window.css";

function Notepad({ content }) {

  return (
    <Frame bg="white" boxShadow="in" className="frame-container">
      {content.toString}
    </Frame>
  );
}

export default Notepad;