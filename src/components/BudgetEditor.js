import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import { toast } from 'react-toastify';

const BudgetEditor = () => {
  const { budget, updateBudget, deleteBudget } = useBudget();
  const [input, setInput] = useState("");

  const handleSetBudget = () => {
    const value = Number(input);
    if (value > 0) {
      updateBudget(value);
      toast.success("✅ Budget updated!");
      setInput("");
    } else {
      toast.error("❌ Please enter a valid budget amount");
    }
  };

  const handleDeleteBudget = () => {
    deleteBudget();
    toast.warn("⚠️ Budget deleted!");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">📝 Budget Editor</h2>
      <input
        type="number"
        placeholder="Enter budget"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <button
        onClick={handleSetBudget}
        className="bg-indigo-500 text-white px-4 py-2 rounded mr-2"
      >
        Set Budget
      </button>
      <button
        onClick={handleDeleteBudget}
        className="bg-red-400 text-white px-4 py-2 rounded"
      >
        Delete Budget
      </button>
      <p className="mt-2">💰 Current Budget: ₹{budget}</p>
    </div>
  );
};

export default BudgetEditor;