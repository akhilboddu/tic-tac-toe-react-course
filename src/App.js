import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";
function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
