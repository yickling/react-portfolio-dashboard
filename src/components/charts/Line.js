import styled from "styled-components";
import { Line } from "react-chartjs-2";

const LineStyled = styled(Line)`
  margin-top: 0.5em;
`

export default ({ chartData }) => {
  return (
    <LineStyled
      data={chartData}
      options={{
        plugins: {
          title: {
            display: false,
            text: "Portfolio",
          },
          legend: {
            display: false,
            position: "bottom",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 6,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 5,
            },
          },
        },
      }}
    />
  );
};
