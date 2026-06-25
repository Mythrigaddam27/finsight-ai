interface AIAnalysisProps {
  totalExpenses: number;
  topCategory: string;
  topAmount: number;
}

export default function AIAnalysis({
  totalExpenses,
  topCategory,
  topAmount,
}: AIAnalysisProps) {
  const percentage = Math.round(
    (topAmount / totalExpenses) * 100
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        AI Spending Analysis
      </h2>

      <p>
        You spent most on{" "}
        <strong>{topCategory}</strong>.
      </p>

      <p>
        This category accounts for{" "}
        <strong>{percentage}%</strong>
        {" "}of total spending.
      </p>

      <p>
        Reducing spending by 15%
        could save roughly{" "}
        <strong>
          ₹{Math.round(topAmount * 0.15)}
        </strong>
        .
      </p>
    </div>
  );
}