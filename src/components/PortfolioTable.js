import styled from "styled-components";
import { Flex, Box } from "reflexbox/styled-components";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

const TableWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px;
  padding-left: 16px;
  padding-top: 0.5em;
`;

const TableHeader = styled(Box)`
  margin-left: 16px;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  // border-style: solid;
  // border-width: 1px;
`;

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

  useEffect(async () => {
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
  }, []);

  return (
    <TableWrapper>
      <TableHeader>Your Assets</TableHeader>
      {tableData ? <DataTable columns={columns} data={tableData} /> : null}
    </TableWrapper>
  );
}

export default PortfolioTable;
