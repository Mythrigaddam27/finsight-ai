import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExpenseCard from "@/components/expenses/ExpenseCard";
import AddExpenseForm from "@/components/expenses/AddExpenseForm";
import { mockExpenses } from "@/constants/mockExpenses";

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <StatCard
            title="Total Expenses"
            value="₹12,500"
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

        <AddExpenseForm />

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Recent Expenses
          </h2>

          <div className="grid gap-4">
            {mockExpenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}