const allocation = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const timeSeries = {
  "1h": {
    labels: [
      "09:00",
      "09:20",
      "09:40",
      "10:00",
      "10:20",
    ],
    datasets: [
      {
        // label: "Value",
        data: [12000, 12060, 12077, 12088, 12202],
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
      },
    ],
  },
  "1d": {
    labels: [
      "09:00",
      "11:00",
      "13:00",
      "16:00",
      "19:00",
      "00:00",
      "05:00",
      "06:00",
    ],
    datasets: [
      {
        // label: "Value",
        data: [12000, 12281, 12288, 12330, 12752, 12877, 12790, 12720],
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
      },
    ],
  },
  "1w": {
    labels: [
      "1st Feb",
      "2nd Feb",
      "3rd Feb",
      "4th Feb",
      "5th Feb",
      "6th Feb",
      "7th Feb",
    ],
    datasets: [
      {
        // label: "Value",
        data: [12000, 12780, 12931, 13300, 13520, 13330, 13100],
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
      },
    ],
  },
  "1m": {
    labels: [
      "1 Feb",
      "4 Feb",
      "7 Feb",
      "10 Feb",
      "16 Feb",
      "19 Feb",
      "25 Feb",
      "28 Feb",
    ],
    datasets: [
      {
        // label: "Value",
        data: [12000, 13300, 13100, 12700, 12982, 13021, 13588, 13720],
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
      },
    ],
  },
  "1y": {
    labels: [
      "Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21",
      "Jul 21",
      "Aug 21",
      "Sep 21",
    ],
    datasets: [
      {
        // label: "Value",
        data: [12000, 13900, 15200, 18700, 17650, 19920, 22021, 26733],
        fill: false,
        backgroundColor: "#293241",
        borderColor: "#293241",
        tension: 0.5,
      },
    ],
  },
};

export {
  allocation,
  timeSeries,
}