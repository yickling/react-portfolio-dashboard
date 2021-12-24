import styled from "styled-components";
import { Line } from "react-chartjs-2";

const LineStyled = styled(Line)`
  margin-top: 0.5em;
`

const LinePortfolio = ({ chartData }) => {
  return (
    <LineStyled
      redraw={true}
      data={chartData}
      options={{
        elements: {
          points: {
            radius: 0,
          },
        },
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

export default LinePortfolio;
