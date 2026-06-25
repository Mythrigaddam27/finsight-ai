"use client";
import { useEffect, useState } from "react";
import ExpensePieChart from "@/components/dashboard/ExpensePieChart";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExpenseCard from "@/components/expenses/ExpenseCard";
import AddExpenseForm from "@/components/expenses/AddExpenseForm";
import { mockExpenses } from "@/constants/mockExpenses";
import { Expense } from "@/types/Expense";
import AIAdvisor from "@/components/dashboard/AIAdvisor";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import AIAnalysis from "@/components/dashboard/AIAnalysis";
export default function Home() {
  const [expenses, setExpenses] =
  useState<Expense[]>([]);

const [budget, setBudget] =
  useState<number>(20000);
const [searchTerm, setSearchTerm] =
  useState("");
useEffect(() => {
  const savedExpenses =
    localStorage.getItem("expenses");

  if (savedExpenses) {
    const parsedExpenses =
      JSON.parse(savedExpenses);

    if (parsedExpenses.length > 0) {
      setExpenses(parsedExpenses);
    } else {
      setExpenses(mockExpenses);
    }
  } else {
    setExpenses(mockExpenses);
  }
  const savedBudget =
    localStorage.getItem("budget");

  if (savedBudget) {
    setBudget(Number(savedBudget));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );
}, [expenses]);
useEffect(() => {
  localStorage.setItem(
    "budget",
    budget.toString()
  );
}, [budget]);
const handleDeleteExpense = (
  id: string
) => {
  setExpenses(
    expenses.filter(
      (expense) => expense.id !== id
    )
  );
};

const handleAddExpense = (
  title: string,
  amount: number,
  category: string
) => {
  const newExpense: Expense = {
    id: Date.now().toString(),
    title,
    amount,
    category,
    date: new Date()
      .toISOString()
      .split("T")[0],
  };

  setExpenses([
    newExpense,
    ...expenses,
  ]);
};
  const totalExpenses = expenses.reduce(
    (sum, expense) =>
      sum + expense.amount,
    0
  );
  const remainingBudget =
  budget - totalExpenses;
  const categoryData = Object.values(
    expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = {
          name: expense.category,
          value: 0,
        };
      }

      acc[expense.category].value +=
        expense.amount;

      return acc;
    }, {} as Record<
      string,
      { name: string; value: number }
    >)
  );

  const topCategory =
    categoryData.length > 0
      ? categoryData.reduce(
          (prev, current) =>
            prev.value > current.value
              ? prev
              : current
        )
      : null;
      const topAmount =
  topCategory
    ? topCategory.value
    : 0;
const filteredExpenses =
  expenses.filter((expense) =>
    expense.title
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
  );
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Dashboard
        </h1>
        <div className="mb-6 rounded-xl bg-white p-6 shadow">
  <h2 className="mb-3 text-xl font-bold">
    Monthly Budget
  </h2>

  <input
    type="number"
    value={budget}
    onChange={(e) =>
      setBudget(Number(e.target.value))
    }
    className="rounded-lg border p-3"
  />
</div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <StatCard
            title="Total Expenses"
            value={`₹${totalExpenses}`}
          />

          <StatCard
  title="Budget Remaining"
  value={`₹${remainingBudget}`}
/>

          <StatCard
            title="Savings"
            value="₹5,000"
          />

          <StatCard
            title="Top Category"
            value={
              topCategory
                ? topCategory.name
                : "N/A"
            }
          />
        </div>

        <AddExpenseForm
          onAddExpense={
            handleAddExpense
          }
          
        />
        

        <div className="my-8">
       <ExpensePieChart
  data={categoryData}
/>
        </div>
        <div className="my-8">
  <AIAdvisor
    topCategory={
      topCategory
        ? topCategory.name
        : "N/A"
    }
    topAmount={topAmount}
  />
  <AIAnalysis
  totalExpenses={totalExpenses}
  topCategory={
    topCategory
      ? topCategory.name
      : "N/A"
  }
  
  topAmount={
    topCategory
      ? topCategory.value
      : 0
  }
/>
<BudgetProgress
  budget={budget}
  spent={totalExpenses}
/>
</div>
<div className="mb-4">
  <input
    type="text"
    placeholder="🔍 Search expenses..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="w-full rounded-lg border p-3"
  />
</div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Recent Expenses
          </h2>

          <div className="grid gap-4">
            {filteredExpenses.map(
              (expense) => (
                <ExpenseCard
  key={expense.id}
  expense={expense}
  onDelete={handleDeleteExpense}
/>
              )
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}