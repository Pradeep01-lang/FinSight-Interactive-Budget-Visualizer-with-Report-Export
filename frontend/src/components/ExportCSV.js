import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

const ExportCSV = () => {
  const { transactions } = useTransactions();

  const handleExport = () => {
    if (transactions.length === 0) {
      toast.warn("⚠️ No transactions to export!");
      return;
    }

    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

    const csv = [
      ["Date", "Description", "Amount"],
      ...transactions.map((t) => [today, t.description, t.amount]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();

    toast.success("✅ Report downloaded as CSV!");
  };

  return (
    <div className="text-right mt-4">
      <button
        onClick={handleExport}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
      >
        📥 Download Report (CSV)
      </button>
    </div>
  );
};

export default ExportCSV;