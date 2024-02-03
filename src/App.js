import { GlobalStyle, ThemeProvider } from "@react95/core";
import Desktop from "./components/Desktop";
import Screensaver from "./components/Screensaver";
import { WindowProvider } from "./contexts/WindowContext";
import { createGlobalStyle } from 'styled-components';
import { useIdle } from "@uidotdev/usehooks";

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 12px
  }
`;

function App() {
  const idle = useIdle(15000);
  return (
    <WindowProvider>
      <ThemeProvider theme={"coldGray"}>
        <GlobalStyle />
        <BodyFontSizeOverride />
        {idle ? <Screensaver/> : <Desktop />}
      </ThemeProvider>
    </WindowProvider>
  );
}

export default App;