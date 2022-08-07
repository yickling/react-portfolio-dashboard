import { Pie } from "react-chartjs-2";

const PieStyled = ({ chartData }) => {
  return (
    <div>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default PieStyled;