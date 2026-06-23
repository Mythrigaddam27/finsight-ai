import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ExpenseCard from "@/components/expenses/ExpenseCard";
import { mockExpenses } from "@/constants/mockExpenses";

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Dashboard
        </h1>

        {/* Statistics */}
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

        {/* Recent Expenses */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
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