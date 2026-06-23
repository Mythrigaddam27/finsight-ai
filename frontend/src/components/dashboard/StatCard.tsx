interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-black">
        {value}
      </p>
    </div>
  );
}