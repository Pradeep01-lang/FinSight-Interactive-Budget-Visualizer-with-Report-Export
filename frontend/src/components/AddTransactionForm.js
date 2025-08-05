import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";
import { toast } from 'react-toastify';

const AddTransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addTransaction({
        description,
        amount: parseFloat(amount),
      });

      setDescription("");
      setAmount("");

      // ✅ Show success notification
      toast.success("Transaction added!");
    } catch (error) {
      // ❌ Show error notification
      toast.error("Failed to save transaction!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <div className="form-buttons">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTransactionForm;