import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";
import Window from "./Window";
import { TaskBar, List } from "@react95/core";
import "./Desktop.css";
import styled from 'styled-components'

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
  color: white;
`

function Desktop() {
  const { applications, activeWindows, openWindow } = useContext(WindowContext);

  return (
    <div className="desktop-container" style={{backgroundImage: `url('https://i.imgur.com/kuP2GlT.jpeg')`,
                                              backgroundRepeat: 'no-repeat',
                                              backgroundSize: 'cover'}}>
      <div className="desktop">
        {applications.map((application, index) => {
          return (
            <div
              key={index}
              onClick={() => openWindow(application)}
            >
                <StyledItem>
                    {application.icon}
                    <StyledSpan>{application.title}</StyledSpan>
                </StyledItem>
            </div>
          );
        })}
        {activeWindows &&
          activeWindows.map((application, index) => {
            return <Window key={index} selectedWindow={application} />;
          })}
      </div>
      <TaskBar
        list={
          <List>
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