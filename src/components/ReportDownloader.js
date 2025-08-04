import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

export default function ReportDownloader() {
  const { transactions } = useTransactions();

  const downloadCSV = () => {
    if (transactions.length === 0) {
      toast.error("⚠️ No transactions to download.");
      return;
    }

    const csvRows = [
      ["Description", "Amount"],
      ...transactions.map((tx) => [tx.description, tx.amount]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvRows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "FinSight_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("📥 Report downloaded successfully!");
  };

  return (
    <div className="text-right mt-4">
      <button
        onClick={downloadCSV}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
      >
        📥 Download Report (CSV)
      </button>
    </div>
  );
}