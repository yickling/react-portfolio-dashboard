import DataTable from "react-data-table-component";

const columns = [
  {
    name: "#",
    selector: (row) => row.ranking,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Percentage",
    selector: (row) => row.percentage,
    sortable: true,
  },
];

const data = [
  {
    ranking: 1,
    name: "Bitcoin",
    amount: 10000,
    percentage: 22.12,
  },
  {
    ranking: 2,
    name: "Ethereum",
    amount: 32019,
    percentage: 77.88,
  },
];

function PortfolioTable() {
  return <DataTable columns={columns} data={data} />;
}

export default PortfolioTable;
