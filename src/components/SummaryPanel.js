import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Text } from "rebass";
import { Flex, Box } from "reflexbox/styled-components";
import Bar from "./charts/Bar";
import Pie from "./charts/Pie";
import Line from "./charts/Line";
import PortfolioTable from "./PortfolioTable";
import { useGraph } from "../state";
import { Container, Card } from "./elements";
import { ChartLoader, TableLoader } from "./loading";
import { compileDataPoints } from '../proc';

const PortfolioValue = styled(Text)`
  color: ${(props) => props.theme.colors.accent};
`;

const PeriodControlButton = styled(Button)`
  background: transparent;
  color: black !important;
  padding-left: 0.25em !important;
  padding-right: 0.25em !important;
  font-weight: ${(props) => props.currentPeriod === props.designatedPeriod ? '600' : '400'};
`;

const GraphControlsContainer = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }

  float: right;
  margin-top: 0.25em;
  margin-right: 0.25em;
`;

const GraphControls = (props) => {
  const graphState = useGraph()

  const { updatePeriod, data: { period }} = graphState

  return (
    <GraphControlsContainer>
      <PeriodControlButton
        currentPeriod={period}
        designatedPeriod="1h"
        onClick={() => updatePeriod("1h")}
      >
        1H
      </PeriodControlButton>
      <PeriodControlButton
        currentPeriod={period}
        designatedPeriod="1d"
        onClick={() => updatePeriod("1d")}
      >
        1D
      </PeriodControlButton>
      <PeriodControlButton
        currentPeriod={period}
        designatedPeriod="1w"
        onClick={() => updatePeriod("1w")}
      >
        1W
      </PeriodControlButton>
      <PeriodControlButton
        currentPeriod={period}
        designatedPeriod="1m"
        onClick={() => updatePeriod("1m")}
      >
        1M
      </PeriodControlButton>
      <PeriodControlButton
        currentPeriod={period}
        designatedPeriod="1y"
        onClick={() => updatePeriod("1y")}
      >
        1Y
      </PeriodControlButton>
    </GraphControlsContainer>
  );
};

const SummaryPanel = () => {
  const [chartData, setChartData] = useState(undefined);
  const [compiledData, setCompiledData] = useState(undefined);

  const {
    data: { period },
  } = useGraph();

  const timeSeries = compiledData ? {
    labels: compiledData[period].map((r) => r.label),
    datasets: [
      {
        data: compiledData[period].map((r) => r.v),
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  } : undefined;

  useEffect(async () => {
    const dummyData = await import("../constants/history-dummy.json");
    const compiled = await compileDataPoints(dummyData);
    setCompiledData(compiled);
  }, []);

  const loading = timeSeries === undefined;

  return (
    <Container>
      <Card>
        <Flex flexWrap="wrap" style={{ margin: "1.5em" }}>
          <Box width={["100%", "40%", "40%"]} px={2}>
            <Text fontSize={3}>Portfolio Balance</Text>
            <PortfolioValue fontSize={5}>$99,999.99 USD</PortfolioValue>
          </Box>
          <Box
            width={["100%", "60%", "60%"]}
            px={2}
            style={{ alignItems: "flex-end" }}
          >
            <GraphControls />
          </Box>
        </Flex>
        <Flex
          flexWrap="wrap"
          style={{
            marginLeft: "1.5em",
            marginRight: "1.5em",
            marginBottom: "1.5em",
          }}
        >
          <Box width={"100%"} px={2}>
            {timeSeries === undefined ? (
              <ChartLoader />
            ) : (
              <Line chartData={timeSeries} />
            )}
          </Box>
        </Flex>
      </Card>
      <Card style={{ marginTop: "12px" }}>
        {loading ? <TableLoader /> : <PortfolioTable />}
      </Card>
    </Container>
  );
};

export default SummaryPanel;
