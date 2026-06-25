interface AIAdvisorProps {
  topCategory: string;
  topAmount: number;
}

export default function AIAdvisor({
  topCategory,
  topAmount,
}: AIAdvisorProps) {
  const suggestedSavings = Math.round(
    topAmount * 0.1
  );
  let suggestion = "";

  if (topCategory === "Travel") {
    suggestion =
      "Travel is your highest expense. Consider public transport, ride sharing, or planning trips in advance.";
  } else if (
    topCategory === "Entertainment"
  ) {
    suggestion =
      "You are spending heavily on entertainment. Review subscriptions and cancel unused services.";
  } else if (topCategory === "Food") {
    suggestion =
      "Food expenses are high. Cooking at home more often could reduce monthly spending.";
  } else if (topCategory === "Shopping") {
    suggestion =
      "Shopping is your largest expense. Consider waiting 24 hours before making non-essential purchases.";
  } else if (topCategory === "Bills") {
    suggestion =
      "Bills form a major portion of spending. Look for opportunities to reduce utility consumption.";
  } else {
    suggestion =
      "Your spending looks balanced. Continue monitoring expenses regularly.";
  }


  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        AI Spending Advisor
      </h2>

      <p className="mb-2">
        Top Spending Category:
        <strong>
          {" "}
          {topCategory}
        </strong>
      </p>

      <p className="mb-2">
        Amount Spent:
        <strong>
          {" "}
          ₹{topAmount}
        </strong>
      </p>

     <p className="text-blue-600">
  {suggestion}
</p>

<p className="mt-3 font-semibold">
  Potential Monthly Savings:
  ₹{suggestedSavings}
</p>
      
    </div>
    
  );
}