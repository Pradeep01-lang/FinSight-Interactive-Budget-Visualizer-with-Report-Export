import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { useTransactions } from "../context/TransactionContext";
import { useBudget } from "../context/BudgetContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartVisualizer = () => {
  const { transactions } = useTransactions();
  const { budget } = useBudget();

  // ✅ Fixed calculation logic: assume all transactions are expenses (positive values)
  const expense = transactions.reduce((sum, t) => sum + t.amount, 0);

  const spent = expense;
  const remaining = budget - spent;

  const data = {
    labels: ["Remaining", "Spent"],
    datasets: [
      {
        label: "Budget Breakdown",
        data: [remaining, spent],
        backgroundColor: ["#10B981", "#EF4444"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#000",
        },
      },
      title: {
        display: true,
        text: "📊 Budget Overview: Remaining vs Spent",
        font: {
          size: 16,
        },
        color: "#374151",
        padding: {
          bottom: 40,
        },
      },
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: (value) => `₹${value.toLocaleString()}`,
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#374151",
        },
      },
      x: {
        ticks: {
          color: "#374151",
        },
      },
    },
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-xl p-5 mt-6"
      style={{
        width: "400px",
        height: "900px",
        marginLeft: "0px",
      }}
    >
      <Bar data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default ChartVisualizer;