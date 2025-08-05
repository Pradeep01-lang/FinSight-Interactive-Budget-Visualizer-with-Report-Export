import React, { useEffect } from 'react';
import { useBudget } from '../context/BudgetContext';
import { toast } from 'react-toastify';

export default function GoalAlerts() {
  const { budget, totalExpenses } = useBudget();
  const over = totalExpenses > budget;

  // 🎯 Toast only when over budget
  useEffect(() => {
    if (over) {
      toast.error(`🚨 You have exceeded your budget by ₹${totalExpenses - budget}`);
    }
  }, [over, totalExpenses, budget]);

  return (
    <div className="mt-4 p-4 rounded-lg shadow bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">🎯 Goal Alerts</h3>
      {over ? (
        <p className="text-red-600 dark:text-red-400 font-medium">
          🚨 Alert: You have exceeded your budget by ₹{totalExpenses - budget}
        </p>
      ) : (
        <p className="text-green-600 dark:text-green-400 font-medium">
          ✅ You are within your budget
        </p>
      )}
    </div>
  );
}