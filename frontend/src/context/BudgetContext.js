import React, { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(() => {
    // Load from localStorage when the app starts
    const savedBudget = localStorage.getItem("budget");
    return savedBudget ? Number(savedBudget) : 0;
  });

  // Save budget to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  const updateBudget = (amount) => setBudget(amount);

  const deleteBudget = () => setBudget(0);

  return (
    <BudgetContext.Provider value={{ budget, updateBudget, deleteBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);