import styled from "styled-components";
import { Flex, Box } from "reflexbox/styled-components";
import DataTable from "react-data-table-component";

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
    selector: (row) => row.amount,
    sortable: true,
    hide: "lg",
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "Allocation",
    selector: (row) => row.percentage,
    sortable: true,
  },
];

const data = [
  {
    ranking: 1,
    name: "Bitcoin",
    amount: 10000,
    price: 62900,
    percentage: 22.12,
  },
  {
    ranking: 2,
    name: "Ethereum",
    amount: 32019,
    price: 4200,
    percentage: 77.88,
  },
];

function PortfolioTable() {
  return (
    <TableWrapper>
      <TableHeader>Your Assets</TableHeader>
      <DataTable columns={columns} data={data} />
    </TableWrapper>
  );
}

export default PortfolioTable;
