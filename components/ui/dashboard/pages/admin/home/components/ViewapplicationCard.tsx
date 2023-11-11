import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      data: [19, 7],
      backgroundColor: ["#FFF2F5", "#CB5A6F"],
      borderColor: ["transparent", "transparent"],
      borderWidth: 1,
      borderRadius: 24,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "65%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ViewapplicationCard({}: {}) {
  return (
    <div className="flex flex-col border border-solid border-borderGreyColor p-4 bg-white">
      <div className="font-bold text-[20px]">Applications</div>
      <div className="flex">
        <div className="px-4 py-8 ">
          <Doughnut data={chartData} options={options} />;
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
