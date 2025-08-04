// src/App.js
import React from "react";
import { BudgetProvider } from "./context/BudgetContext";
import { TransactionProvider } from "./context/TransactionContext";
import Dashboard from "./components/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BudgetProvider>
      <TransactionProvider>
        <div
          className="min-h-screen bg-no-repeat bg-cover bg-center font-sans dark:bg-gray-900 transition-all"
          style={{ backgroundImage: "url('/images/finsight-bg.jpg')" }}
        >
          {/* Header */}
          <header className="text-center py-4 shadow-md bg-white/70 dark:bg-gray-900/70 dark:text-white backdrop-blur-sm">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              FinSight – Budget Manager
            </h1>
          </header>

          {/* Main Content */}
          <main className="p-4 max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/70 rounded-lg shadow-md backdrop-blur-md mt-4">
            <Dashboard />
          </main>

          {/* Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </TransactionProvider>
    </BudgetProvider>
  );
}

export default App;