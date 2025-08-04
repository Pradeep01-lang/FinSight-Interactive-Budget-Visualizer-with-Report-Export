import React, { useEffect } from "react";
import { useBudget } from "../context/BudgetContext";
import { useTransactions } from "../context/TransactionContext";
import { toast } from "react-toastify";

const BudgetOverview = () => {
  const { budget } = useBudget();
  const { transactions } = useTransactions();

  const spent = transactions.reduce((acc, t) => acc + Number(t.amount), 0);
  const remaining = budget - spent;
  const spentPercentage = (spent / budget) * 100;

  // 🟡 Show toast based on budget status
  useEffect(() => {
    if (budget === 0) return;

    if (spent > budget) {
      toast.error("⚠️ You have exceeded your budget!");
    } else if (spentPercentage > 90) {
      toast.warning("⚠️ You’ve spent over 90% of your budget.");
    }
  }, [spent, budget]);

  return (
    <div className="bg-white p-4 rounded shadow mt-4 dark:bg-gray-800 dark:text-white">
      <h2 className="text-lg font-semibold mb-2">📊 Budget Overview</h2>
      <p>💰 Budget: ₹{budget}</p>
      <p>💸 Spent: ₹{spent}</p>
      <p>💼 Remaining: ₹{remaining}</p>
    </div>
  );
};

export default BudgetOverview;