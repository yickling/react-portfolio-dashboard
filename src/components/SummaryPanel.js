import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Text } from "rebass";
import { Flex, Box } from "reflexbox/styled-components";
import { doc, getDoc } from "firebase/firestore"; 
// import { useFirestoreQuery } from "../firebase/firestore";
import Bar from "./charts/Bar";
import Pie from "./charts/Pie";
import Line from "./charts/Line";
import { allocation, timeSeries } from "../constants";
import PortfolioTable from "./PortfolioTable";
import { useGraph } from "../state";
import { Container, Card } from "./elements";
import { ChartLoader, TableLoader } from "./loading";
import { db } from "../firebase";
import { seedData } from "../firebase/seedHistory";

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
  );};

const data = {
  data: [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "18849987.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "1224708215847.9678159531115455",
      volumeUsd24Hr: "29991322800.9213369829664016",
      priceUsd: "64971.3029429658394965",
      changePercent24Hr: "-0.9890132891681767",
      vwap24Hr: "65834.9200795138518995",
      explorer: "https://blockchain.info/",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "118016829.7490000000000000",
      maxSupply: null,
      marketCapUsd: "499551067028.6769388971408806",
      volumeUsd24Hr: "16028998405.5518906719258968",
      priceUsd: "4232.8799044265957229",
      changePercent24Hr: "6.1872378987497134",
      vwap24Hr: "4143.2348314074722096",
      explorer: "https://etherscan.io/",
    },
    {
      id: "binance-coin",
      rank: "3",
      symbol: "BNB",
      name: "Binance Coin",
      supply: "166801148.0000000000000000",
      maxSupply: "166801148.0000000000000000",
      marketCapUsd: "80884810428.9526497434119200",
      volumeUsd24Hr: "1726150213.8903493012479785",
      priceUsd: "484.9175883906545400",
      changePercent24Hr: "-1.4327780831712502",
      vwap24Hr: "496.3319344926145561",
      explorer:
        "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    },
    {
      id: "cardano",
      rank: "4",
      symbol: "ADA",
      name: "Cardano",
      supply: "32904527668.6660000000000000",
      maxSupply: "45000000000.0000000000000000",
      marketCapUsd: "73739024564.1744062272915451",
      volumeUsd24Hr: "2071456816.9790230228223299",
      priceUsd: "2.2409993331827668",
      changePercent24Hr: "3.6944798713975691",
      vwap24Hr: "2.2232584869892586",
      explorer: "https://cardanoexplorer.com/",
    },
    {
      id: "tether",
      rank: "5",
      symbol: "USDT",
      name: "Tether",
      supply: "69043109914.2716000000000000",
      maxSupply: null,
      marketCapUsd: "69053912279.7519204357080541",
      volumeUsd24Hr: "55640944347.2179734319582158",
      priceUsd: "1.0001564582692427",
      changePercent24Hr: "0.0128073591128376",
      vwap24Hr: "1.0001386341509260",
      explorer: "https://www.omniexplorer.info/asset/31",
    },
  ],
  timestamp: 1634824760472,
};

const SummaryPanel = () => {
  const uid = "TYudmyDwJ7rFHC7siUdw";

  const [chartData, setChartData] = useState(undefined);
  const {
    data: { period },
  } = useGraph();

  useEffect(async () => {
    const fetchPrices = async () => {
      // const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
      // const data = await res.json();
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#C0C0C0",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      });
    };

    const docSnap = await getDoc(doc(db, "histories", "TYudmyDwJ7rFHC7siUdw"));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    fetchPrices();
  }, []);

  const loading = !!!chartData;

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
            {loading ? (
              <ChartLoader />
            ) : (
              <Line chartData={timeSeries[period || "1d"]} />
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