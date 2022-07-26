import styled, { ThemeProvider } from "styled-components";
import theme from './theme';
import Sidebar from "./components/elements/Sidebar";
import SummaryPanel from "./components/SummaryPanel";
import { AppContextProvider } from "./state";

const AppContainer = styled.div`
  // margin-top: 0.75em;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

function App() {
  return (
    <AppContainer className="App">
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Sidebar />
          <SummaryPanel />
        </AppContextProvider>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
