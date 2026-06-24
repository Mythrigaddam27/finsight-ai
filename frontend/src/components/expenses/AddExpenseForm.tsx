"use client";

import { useState } from "react";

interface AddExpenseFormProps {
  onAddExpense: (
    title: string,
    amount: number
  ) => void;
}

export default function AddExpenseForm({
  onAddExpense,
}: AddExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAddExpense(
      title,
      Number(amount)
    );

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-2xl font-bold">
        Add Expense
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="rounded-lg border p-3"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Add Expense
      </button>
    </form>
  );
}