import { Frame } from "@react95/core";
import "./Window.css";
import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function Explorer() {
    const { applications, openWindow } = useContext(WindowContext);

  return (
    <Frame bg="white" boxShadow="in" className="frame-container-folder">
      <div className="explorer-container">
        {applications.map((application, index) => {
            return (
                <div className="explorer-item">
                    <div className="icon-holder"
                    key={index}
                    onClick={() => openWindow(application)}
                    >
                        {application.icon}
                        <p id="project-name-text">{application.title}</p>
                    </div>
                </div>
            );
            })}
      </div>
    </Frame>
  );
}