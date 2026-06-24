"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExpenseCard from "@/components/expenses/ExpenseCard";
import AddExpenseForm from "@/components/expenses/AddExpenseForm";
import { mockExpenses } from "@/constants/mockExpenses";
import { Expense } from "@/types/Expense";

export default function Home() {
  const [expenses, setExpenses] =
    useState<Expense[]>(mockExpenses);

  const handleAddExpense = (
    title: string,
    amount: number
  ) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      title,
      amount,
      category: "Other",
      date: new Date()
        .toISOString()
        .split("T")[0],
    };

    setExpenses([
      newExpense,
      ...expenses,
    ]);
  };

  const totalExpenses =
    expenses.reduce(
      (sum, expense) =>
        sum + expense.amount,
      0
    );

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <StatCard
            title="Total Expenses"
            value={`₹${totalExpenses}`}
          />

          <StatCard
            title="Budget Remaining"
            value="₹7,500"
          />

          <StatCard
            title="Savings"
            value="₹5,000"
          />
        </div>

        <AddExpenseForm
          onAddExpense={
            handleAddExpense
          }
        />

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Recent Expenses
          </h2>

          <div className="grid gap-4">
            {expenses.map(
              (expense) => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                />
              )
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}