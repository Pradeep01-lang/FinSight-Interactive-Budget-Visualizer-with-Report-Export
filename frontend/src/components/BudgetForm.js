import React, { useState } from "react";
import { useBudget } from "../context/BudgetContext";
import { toast } from 'react-toastify';

const BudgetForm = () => {
  const [input, setInput] = useState(0);
  const { setBudget } = useBudget();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = Number(input);
    if (value > 0) {
      setBudget(value);
      toast.success("✅ Budget saved!");
      setInput(0);
    } else {
      toast.error("❌ Please enter a valid budget amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-3">
      <h3 className="text-lg font-semibold">Set Budget</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        className="w-full border p-2 rounded"
        placeholder="Enter your budget"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Save
      </button>
    </form>
  );
};

export default BudgetForm;