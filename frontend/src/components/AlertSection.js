import React from "react";
import { useBudget } from "../context/BudgetContext";
import { useTransactions } from "../context/TransactionContext";

const AlertSection = () => {
  const { budget } = useBudget();
  const { transactions } = useTransactions();
  const spent = transactions.reduce((acc, t) => acc + Number(t.amount), 0);

  if (spent > budget) {
    return (
      <div className="mt-6 p-4 bg-red-100 text-red-800 rounded shadow">
        ⚠️ You have exceeded your budget!
      </div>
    );
  }

  if (budget > 0 && spent > 0.8 * budget) {
    return (
      <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded shadow">
        ⚠️ You are nearing your budget limit.
      </div>
    );
  }

  return null;
};

export default AlertSection;