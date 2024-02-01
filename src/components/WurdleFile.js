import { Frame } from "@react95/core";
import "./Window.css";

function WurdleFile({ content }) {

  return (
    <Frame bg="white" boxShadow="in" className="frame-container-project">
      <div id="me">
      <h1 style={{ textAlign: "center" }}>{content[0]["content"]}</h1>
      <a href={content[3]["content"][0]}><img src={content[2]["content"][0]["src"]} alt="Me."></img></a></div>
      <p>{content[1]["content"][0]}</p>
      <p id="bold-p">{content[1]["content"][1]}</p>
      <p>{content[1]["content"][2]}</p>
      <p>{content[1]["content"][3]}</p>
      <p>{content[1]["content"][4]}</p>
      <p id="bold-p">{content[1]["content"][5]}<a href={content[3]["content"][0]}><span>{content[3]["content"][0]}</span></a></p>
      <p id="bold-p">{content[1]["content"][6]}<a href={content[3]["content"][1]}><span>{content[3]["content"][1]}</span></a></p>

    </Frame>
  );
}

export default WurdleFile;