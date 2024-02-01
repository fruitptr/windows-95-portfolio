import { Frame } from "@react95/core";
import "./Window.css";
import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function Explorer(content) {
    const { applications, openWindow } = useContext(WindowContext);
    console.log("Applications: ", applications)

    const filteredApplications = applications.filter(application =>
    content["content"].includes(application.id)
  );

  return (
    <Frame bg="white" boxShadow="in" className="frame-container-folder">
      <div className="explorer-container">
        {filteredApplications.map((application, index) => (
          <div className="explorer-item" key={index}>
            <div
              className="icon-holder"
              onClick={() => openWindow(application)}
            >
              {application.icon}
              <p id="project-name-text">{application.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}