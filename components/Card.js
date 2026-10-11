export default function Card({ title, category, difficulty }) {
  return (
    <div className="h-40 rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>

      <p className="mt-6 text-sm text-slate-500">{category}</p>

      <p className="mt-6 text-sm text-black">{difficulty}</p>
    </div>
  );
}