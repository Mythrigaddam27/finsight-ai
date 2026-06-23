export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Expenses",
    "Budget",
    "AI Advisor",
    "Reports",
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-5">
      <h2 className="text-lg font-semibold mb-8">
        Navigation
      </h2>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-800 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}