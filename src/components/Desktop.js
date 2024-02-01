import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";
import Window from "./Window";
import { TaskBar, List } from "@react95/core";
import "./Desktop.css";
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

function Desktop() {
  const { applications, activeWindows, openWindow } = useContext(WindowContext);
  console.log("ACTIVE WINDOWS: ", activeWindows)

  return (
    <div className="desktop-container" style={{backgroundImage: `url('https://i.imgur.com/kuP2GlT.jpeg')`,
                                              backgroundRepeat: 'no-repeat',
                                              backgroundSize: 'cover'}}>
      <div className="desktop">
        {applications.map((application, index) => {
          return (
            <div className="icon-holder"
              key={index}
              onClick={() => openWindow(application)}
            >
              <div className="icon-image-holder">
                {application.icon}
              </div>
                <p className="icon-text-holder">{application.title}</p>
            </div>
          );
        })}
      </div>
      {activeWindows &&
          activeWindows.map((application, index) => {
            return <Window key={index} selectedWindow={application} />;
          })}
      <TaskBar
        list={
          <List>
            <Link href={"https://github.com/fruitptr"} target="_blank">
            <List.Item>
                <div className="icon-and-text">
                  <img src="https://static-00.iconduck.com/assets.00/github-icon-512x512-iv3lcppz.png" alt="GitHub Logo"></img><div id="text">GitHub</div>
                </div>
            </List.Item>
            </Link>
            <Link href={"https://www.linkedin.com/in/muhammadshaheerahmad/"} target="_blank">
            <List.Item>
                <div className="icon-and-text">
                  <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png" alt="LinkedIn Logo"></img><div id="text">LinkedIn</div>
                </div>
            </List.Item>
            </Link>
            <List.Divider />
            {applications.map((application, index) => {
              return (
                <List.Item
                  key={index}
                  icon={application.icon}
                  onClick={() => openWindow(application)}
                >
                  {application.title}
                </List.Item>
              );
            })}
          </List>
        }
      />
    </div>
  );
}

export default Desktop;