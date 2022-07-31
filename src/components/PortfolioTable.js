// import styled from "styled-components";
import { Flex, Box } from "reflexbox/styled-components";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { Text } from "rebass";

import { Card } from "./elements";

// const TableWrapper = styled.div`
//   color: ${(props) => props.theme.colors.primary};
//   background-color: ${(props) => props.theme.colors.cardBackground};
//   border-color: #dedfe2;
// `;

// const TableHeader = styled(Box)`
// `;

const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
}

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Balance",
    selector: (row) => row.balance.toFixed(2),
    sortable: true,
    hide: "lg",
  },
  {
    name: "Price",
    selector: (row) => row.price.toFixed(2),
    sortable: true,
  },
  {
    name: "Allocation",
    selector: (row) => row.percentage,
    sortable: true,
  },
];

function PortfolioTable() {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const dummyData = await import("../constants/portfolio-dummy.json");
    
      const parseData = (holdings) => {
        const portfolio = holdings.map((h) => ({
          ...h,
          totalValue: h.balance * h.price,
        }))
        .sort((f, s) => f.totalValue > s.totalValue)
        .map((h, index) => ({ ...h, ranking: index}))
  
        const sumTotal = portfolio.reduce((prev, current) => prev += current.totalValue, 0)
        return portfolio.map(h => ({ ...h, percentage: `${(h.totalValue / sumTotal * 100).toFixed(2)}%` }));
      }
  
      setTableData(parseData(dummyData.portfolio.holdings));
    }

    fetchData();
  }, []);

  return (
    <Card style={{ marginTop: "12px" }}>
      <Flex flexWrap="wrap" style={{ margin: "1.5em" }}>
        <Box width={["100%", "100%", "100%"]} px={2}>
          <Text fontSize={3}>Your Assets</Text>
          {tableData ? <DataTable columns={columns} data={tableData} customStyles={customStyles} /> : null}
        </Box>
      </Flex>
    </Card>
  );
}

export default PortfolioTable;
