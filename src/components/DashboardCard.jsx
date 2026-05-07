import StatsCard from './StatsCard'
import MatchCard from './MatchCard'
export default function DashboardCard(){
    const stats = [
        { title: 'Total Runs', value: '2,847' },
        { title: 'XP Gained', value: '14,220' },
        { title: 'Current Rank', value: '#142' },
        { title: 'Daily Streak', value: '7 Days' },
      ]
    
      const matches = [
        { type: 'T20', score: '45/20', strike: '225' },
        { type: 'ODI', score: '156/80', strike: '195' },
        { type: 'TEST', score: '342/200', strike: '171' },
      ]
    return(
        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <section className="rounded-[40px] bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 p-10 text-white shadow-2xl">
          <div className="flex flex-col xl:flex-row justify-between gap-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm">
                Season 1
              </p>

              <h2 className="text-6xl font-black mt-6 leading-tight">
                Summer Coding
                <br />
                Premier League
              </h2>

              <p className="text-white/80 text-lg mt-6 max-w-xl leading-8">
                Transform your coding journey into a cricket-inspired competitive experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white/20 rounded-[32px] p-8 backdrop-blur-xl">
                <p className="uppercase text-sm">
                  Time Left
                </p>

                <h3 className="text-7xl font-black mt-4">
                  12
                </h3>

                <p className="text-xl mt-2">
                  Days Remaining
                </p>
              </div>

              <div className="bg-white/20 rounded-[32px] p-8 backdrop-blur-xl">
                <p className="uppercase text-sm">
                  Current Rank
                </p>

                <h3 className="text-7xl font-black mt-4">
                  #142
                </h3>

                <p className="text-xl mt-2">
                  Elite Division
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => (
            <StatsCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </section>

        <section>
          <h2 className="text-4xl font-black mb-6">
            Active Matches
          </h2>

          <div className="grid xl:grid-cols-3 gap-6">
            {matches.map((item) => (
              <MatchCard
                key={item.type}
                type={item.type}
                score={item.score}
                strike={item.strike}
              />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[36px] p-8 border border-zinc-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-black">
              Recent Activity
            </h2>

            <button className="text-emerald-500 font-bold">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {[
              'Solved Binary Search Tree Problem',
              'Completed React Hooks Module',
              'Unlocked Week Warrior Badge',
              'Pushed 12 GitHub Commits',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-[28px] bg-zinc-50 p-6"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    {item}
                  </h3>

                  <p className="text-emerald-500 mt-3 font-semibold">
                    +50 XP • +20 Runs
                  </p>
                </div>

                <span className="text-zinc-400">
                  2h ago
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>
    )
}