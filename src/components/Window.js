import { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";
import { Modal, List } from "@react95/core";
import Notepad from "./Notepad";
import FruitsClassifierFile from "./FruitsClassifierFile";
import WurdleFile from "./WurdleFile";

export default function Window({ selectedWindow }) {
  const { closeWindow } = useContext(WindowContext);

  const mobile = window.innerWidth < 600;

  const handleCloseWindow = () => {
    closeWindow(selectedWindow);
  };

  const typeSelector = () => {
    switch (selectedWindow.type) {
        case "notepad":
            return <Notepad content={selectedWindow.content} />;
        case "fruit-classifier":
            return <FruitsClassifierFile content={selectedWindow.content} />;
        case "wurdle":
            return <WurdleFile content={selectedWindow.content} />;
      default:
        return console.log("Error: Window type not found.");
    }
  };

  const populateMenu = (menu) => {
    return [
      {
        name: "Links",
        list: (
          <List>
            {menu.map((item, index) => {
              return (
                <List.Item key={index}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                </List.Item>
              );
            })}
          </List>
        ),
      },
    ];
  };

  return (
    <Modal
      title={selectedWindow.title}
      closeModal={handleCloseWindow}
      menu={selectedWindow.menu && populateMenu(selectedWindow.menu)}
      style={{
        left: mobile ? "0%" : "20%",
        top: mobile ? "0%" : "5%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
      buttons={[{ value: "Close", onClick: handleCloseWindow }]}
    >
      {typeSelector()}
    </Modal>
  );
}