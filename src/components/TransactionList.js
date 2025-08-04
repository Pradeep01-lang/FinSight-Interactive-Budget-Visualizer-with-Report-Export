import React from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useTransactions();

  const handleDelete = (id) => {
    try {
      deleteTransaction(id);
      toast.success("🗑️ Transaction deleted");
    } catch (err) {
      toast.error("❌ Failed to delete transaction");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        📃 Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No transactions found.</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="flex justify-between items-center py-2"
            >
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  {tx.description}
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  ₹{tx.amount}
                </p>
              </div>
              <button
                onClick={() => handleDelete(tx.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;