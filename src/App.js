import { GlobalStyle, ThemeProvider } from "@react95/core";
import Desktop from "./components/Desktop";
import { WindowProvider } from "./contexts/WindowContext";
import { createGlobalStyle } from 'styled-components';

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 12px
  }
`;

function App() {
  return (
    <WindowProvider>
      <ThemeProvider theme={"coldGray"}>
        <GlobalStyle />
        <BodyFontSizeOverride />
        <Desktop />
      </ThemeProvider>
    </WindowProvider>
  );
}

export default App;