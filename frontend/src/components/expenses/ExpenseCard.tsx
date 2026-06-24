import { Expense } from "@/types/Expense";

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({
  expense,
}: ExpenseCardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">
          {expense.title}
        </h3>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {expense.category}
        </span>
      </div>

      <div className="mt-3 flex justify-between">
        <span className="font-bold text-slate-900">
          ₹{expense.amount}
        </span>

        <span className="text-gray-500">
          {expense.date}
        </span>
      </div>
    </div>
  );
}