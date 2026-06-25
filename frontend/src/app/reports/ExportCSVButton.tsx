interface ExportCSVButtonProps {
  data: {
    title: string;
    amount: number;
    category: string;
    date: string;
  }[];
}

export default function ExportCSVButton({
  data,
}: ExportCSVButtonProps) {
  const exportCSV = () => {
    const headers =
      "Title,Amount,Category,Date\n";

    const rows = data
      .map(
        (expense) =>
          `${expense.title},${expense.amount},${expense.category},${expense.date}`
      )
      .join("\n");

    const csvContent =
      headers + rows;

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "expenses-report.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportCSV}
      className="rounded-lg bg-green-600 px-4 py-2 text-white"
    >
      Export CSV
    </button>
  );
}