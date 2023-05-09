import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const LineChart = ({ values, label }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgb(0,0,0)",
        data: values,
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{ maintainAspectRatio: false }}
      height="200%"
      width="80%"
    />
  );
};

export default LineChart;
