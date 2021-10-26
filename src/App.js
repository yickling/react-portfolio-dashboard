import styled, { ThemeProvider } from "styled-components";
import { Box, Card, Image, Heading, Text } from "rebass";
import theme from './theme';
import SummaryPanel from "./components/SummaryPanel";

const AppContainer = styled.div`
  margin-top: 0.75em;
`;

function App() {
  return (
    <AppContainer className="App">
      <ThemeProvider theme={theme}>
        <SummaryPanel />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
