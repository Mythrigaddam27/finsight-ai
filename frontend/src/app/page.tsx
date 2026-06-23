import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold">
          Welcome to FinSight AI
        </h1>

        <p className="mt-2 text-gray-600">
          Your AI-powered personal finance advisor.
        </p>
      </div>
    </DashboardLayout>
  );
}