import Chart, { ArcElement } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function PieChart({ data }) {
  Chart.register(ArcElement);
  return <Pie data={data} />;
}
