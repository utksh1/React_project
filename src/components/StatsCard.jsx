
export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-[32px] p-7 shadow-sm border border-zinc-100">
      <p className="text-zinc-500 text-lg">{title}</p>
      <h3 className="text-6xl font-black mt-5">{value}</h3>
    </div>
  )
}
