
export default function MatchCard({ type, score, strike }) {
  return (
    <div className="bg-white rounded-[36px] p-8 border border-zinc-100 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-5xl font-black">{type}</h3>
          <p className="text-zinc-500 mt-2 text-lg">Match Format</p>
        </div>

        <span className="px-5 py-3 rounded-full bg-emerald-100 text-emerald-600 font-bold">
          Batting
        </span>
      </div>

      <div className="bg-zinc-50 rounded-[28px] p-7">
        <div className="flex justify-between">
          <div>
            <p className="text-zinc-400 uppercase text-sm">
              Score
            </p>

            <h4 className="text-6xl font-black mt-3">
              {score}
            </h4>
          </div>

          <div>
            <p className="text-zinc-400 uppercase text-sm">
              Strike Rate
            </p>

            <h4 className="text-5xl font-black text-emerald-500 mt-3">
              {strike}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
