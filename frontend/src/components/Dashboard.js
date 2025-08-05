import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

import BudgetEditor from "./BudgetEditor";
import ChartVisualizer from "./ChartVisualizer";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import ExportCSV from "./ExportCSV";
import AlertSection from "./AlertSection";

const Dashboard = () => {
  const { budget } = useBudget();
  const { transactions } = useTransactions();
  const [activeTab, setActiveTab] = useState("budget");
  const [darkMode, setDarkMode] = useState(false);

  const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const remaining = budget - totalSpent;

  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    toast.info(`🌗 Dark Mode ${!darkMode ? "Enabled" : "Disabled"}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-4 relative transition-all">

      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={handleDarkModeToggle}
        className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-white rounded shadow-md hover:bg-gray-700 transition-colors"
      >
        🌓 Toggle Dark Mode
      </button>

      <h1 className="text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-6">
        💸 FinSight Dashboard
      </h1>

      {/* Budget Summary */}
      <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow-md max-w-xl mx-auto mb-6 text-center transition-colors">
        <p className="text-lg">
          <strong>Total Budget:</strong> ₹{budget}
        </p>
        <p className="text-lg text-red-600 dark:text-red-400">
          <strong>Total Spent:</strong> ₹{totalSpent}
        </p>
        <p className="text-lg text-green-600 dark:text-green-400">
          <strong>Remaining:</strong> ₹{remaining}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg font-medium transition-colors ${
            activeTab === "budget"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("budget")}
        >
          💰 Budget
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
            activeTab === "transactions"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("transactions")}
        >
          📋 Transactions
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-xl shadow-sm transition-colors">
        {activeTab === "budget" && (
          <>
            <BudgetEditor />
            <ChartVisualizer />
          </>
        )}

        {activeTab === "transactions" && (
          <>
            <TransactionForm />
            <TransactionList />
            <ExportCSV />
          </>
        )}
      </div>

      <AlertSection />
    </div>
  );
};

export default Dashboard;