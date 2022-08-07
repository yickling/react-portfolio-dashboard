import styled, { ThemeProvider } from "styled-components";
import { Text } from "rebass";
import { Route } from "wouter";
import theme from './theme';
import Sidebar from "./components/elements/Sidebar";
import Topbar from "./components/elements/Topbar";
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
      <div style={{
        flexBasis: 0,
        flexGrow: 999,
      }}>
        <Topbar />
        <Route path="/"><SummaryPanel /></Route>
        <Route path="/assets">Assets</Route>
        <Route path="/trade">Trade</Route>
        <Route path="/pay">Pay</Route>
        <Route path="/more">More</Route>
        <div style={{ borderColor: '#dedfe2', borderWidth: '1px 0px 0px 0px', borderStyle: 'solid' }}><Text fontSize={1} sx={{ marginTop: '0.5rem', marginLeft: '0.5rem', marginBottom: '0.5rem' }}>© 2022 yickling@github</Text></div>
      </div>
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
