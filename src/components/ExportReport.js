import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

const ExportReport = () => {
  const { transactions } = useTransactions();

  const handleExport = () => {
    if (transactions.length === 0) {
      toast.warn("⚠️ No transactions to export.");
      return;
    }

    const csvContent = [
      ["Description", "Amount"],
      ...transactions.map((t) => [t.description, t.amount])
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "FinSight_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("✅ Report exported successfully!");
  };

  return (
    <div className="text-right">
      <button
        onClick={handleExport}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow transition duration-200 mt-4"
      >
        📤 Export Report (CSV)
      </button>
    </div>
  );
};

export default ExportReport;