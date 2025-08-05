import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";
import "../styles/finsight.css";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      toast.error("⚠️ Please enter both description and amount.");
      return;
    }

    try {
      addTransaction({
        description,
        amount: parseFloat(amount),
        user: { id: 1 }, // Adjust for real user ID if needed
      });

      toast.success("✅ Transaction added!");
      setDescription("");
      setAmount("");
    } catch (err) {
      toast.error("❌ Failed to add transaction.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="finsight-form bg-white dark:bg-gray-800 p-4 rounded shadow mt-4 transition"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        ➕ Add Transaction
      </h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="finsight-input"
      />

      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="finsight-input"
      />

      <button type="submit" className="finsight-button bg-green-500 hover:bg-green-600">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;