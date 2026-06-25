interface BudgetProgressProps {
  budget: number;
  spent: number;
}

export default function BudgetProgress({
  budget,
  spent,
}: BudgetProgressProps) {
  const percentage = Math.min(
    (spent / budget) * 100,
    100
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Budget Usage
      </h2>

      <div className="h-5 w-full rounded-full bg-gray-200">
        <div
          className="h-5 rounded-full bg-blue-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3">
        {percentage.toFixed(1)}% used
      </p>
    </div>
  );
}