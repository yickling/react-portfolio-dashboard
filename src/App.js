import styled, { ThemeProvider } from "styled-components";
import theme from './theme';
import SummaryPanel from "./components/SummaryPanel";
import { AppContextProvider } from "./state";

const AppContainer = styled.div`
  margin-top: 0.75em;
`;

function App() {
  return (
    <AppContainer className="App">
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <SummaryPanel />
        </AppContextProvider>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
