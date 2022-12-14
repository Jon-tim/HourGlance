const chartContainer = document.querySelector("#myChart");
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "#596eae",
      borderColor: "#596eae",
      data: [30, 15, 18, 2, 34, 15, 18, 46, 16, 51, 47, 36],
      tension: 0.5,
    },
    {
      label: "",
      backgroundColor: "#5388d89c",
      borderColor: "#5388d89c",
      data: [10, 15, 25, 45, 38, 24, 49, 26, 60],
      tension: 0.5,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart = new Chart(chartContainer, config);
