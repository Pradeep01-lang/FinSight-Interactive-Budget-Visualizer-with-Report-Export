import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.error("Failed to fetch transactions", err);
    }
  };

  // Add a new transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post("http://localhost:8080/api/transactions", transaction);
      setTransactions([...transactions, res.data]);
    } catch (err) {
      console.error("Failed to add transaction", err);
    }
  };

  // Delete a transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/transactions/${id}`);
      setTransactions(transactions.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete transaction", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);