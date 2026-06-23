import { Expense } from "@/types/Expense";

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({
  expense,
}: ExpenseCardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h3 className="font-semibold">
        {expense.title}
      </h3>

      <p className="text-gray-500">
        {expense.category}
      </p>

      <div className="mt-2 flex justify-between">
        <span>₹{expense.amount}</span>
        <span>{expense.date}</span>
      </div>
    </div>
  );
}