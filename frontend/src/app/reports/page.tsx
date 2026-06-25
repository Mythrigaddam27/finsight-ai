"use client";
import ExportCSVButton from "./ExportCSVButton";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Expense } from "@/types/Expense";


export default function ReportsPage() {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  useEffect(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(
        JSON.parse(savedExpenses)
      );
    }
  }, []);

  const totalExpenses =
    expenses.reduce(
      (sum, expense) =>
        sum + expense.amount,
      0
    );

  const categoryBreakdown =
    Object.values(
      expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
          acc[expense.category] = {
            category:
              expense.category,
            amount: 0,
          };
        }

        acc[expense.category].amount +=
          expense.amount;

        return acc;
      }, {} as Record<
        string,
        {
          category: string;
          amount: number;
        }
      >)
    );

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Reports
        </h1>
       <div className="mb-6">
  <ExportCSVButton
    data={expenses}
  />
</div>
        <div className="mb-6 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">
            Total Expenses
          </h2>

          <p className="mt-2 text-3xl font-bold">
            ₹{totalExpenses}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Category Breakdown
          </h2>

          {categoryBreakdown.map(
            (item) => (
              <div
                key={item.category}
                className="mb-3 flex justify-between"
              >
                <span>
                  {item.category}
                </span>

                <span>
                  ₹{item.amount}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}