"use client";

import { useState } from "react";

interface AddExpenseFormProps {
  onAddExpense: (
    title: string,
    amount: number,
    category: string
  ) => void;
}

export default function AddExpenseForm({
  onAddExpense,
}: AddExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAddExpense(
      title,
      Number(amount),
      category
    );

    setTitle("");
    setAmount("");
    setCategory("Food");
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

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="rounded-lg border p-3"
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">
            Entertainment
          </option>
          <option value="Other">Other</option>
        </select>
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