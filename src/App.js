import styled, { ThemeProvider } from "styled-components";
import theme from './theme';
import Sidebar from "./components/elements/Sidebar";
import SummaryPanel from "./components/SummaryPanel";
import { AppContextProvider, useApp } from "./state";

const AppContainer = styled.div`
  // margin-top: 0.75em;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

const Main = () => {
  const { data: { darkMode } } = useApp()

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Sidebar />
      <SummaryPanel />
    </ThemeProvider>
  );
}

function App() {

  return (
    <AppContainer className="App">
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </AppContainer>
  );
}

export default App;
