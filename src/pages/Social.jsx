import {
  Trophy,
  Flame,
  Shield,
  Medal,
  Users,
  Activity,
  Globe,
  Import,
} from 'lucide-react'
import Footer from '../components/Footer'
function LeaderboardRow({
  rank,
  name,
  score,
  runs,
  badge,
  trend,
}) {
  return (
    <div className="grid grid-cols-12 items-center gap-4 p-6 border-b border-zinc-200">

      <div className="col-span-1">
        <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center font-black text-2xl">
          {rank}
        </div>
      </div>

      <div className="col-span-4 flex items-center gap-5">

        <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.35)] flex items-center justify-center text-white text-4xl font-black">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-3xl font-black">
            {name}
          </h3>

          <p className="text-zinc-500 mt-2">
            Amateur Division
          </p>
        </div>

      </div>

      <div className="col-span-2 text-center">
        <h2 className="text-5xl font-black">
          {score}
        </h2>
      </div>

      <div className="col-span-1 text-center">
        <h2 className="text-4xl font-black text-blue-500">
          {runs}
        </h2>
      </div>

      <div className="col-span-2 flex justify-center">
        <div className="px-5 py-3 rounded-2xl bg-zinc-100 font-bold flex items-center gap-2">
          <Flame size={18} className="text-yellow-500" />
          {badge}
        </div>
      </div>

      <div className="col-span-2 text-center">
        <div className="text-red-500 font-black text-3xl">
          ↘
        </div>

        <p className="text-red-500 font-bold mt-1">
          {trend}
        </p>
      </div>

    </div>
  )
}

function ComingSoonCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="border border-zinc-200 rounded-[28px] p-8 bg-white">
      <div className="flex items-start gap-5">

        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="text-3xl font-black">
            {title}
          </h3>

          <p className="text-zinc-500 text-xl mt-4 leading-8">
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}

export default function Social() {

  const players = [
    {
      rank: 1,
      name: 'CodeMaster',
      score: '5,420',
      runs: '310',
      badge: 'Century King',
      trend: '1',
    },
    {
      rank: 2,
      name: 'AlgoKnight',
      score: '4,910',
      runs: '280',
      badge: 'Bug Hunter',
      trend: '2',
    },
    {
      rank: 3,
      name: 'ByteBlazer',
      score: '4,300',
      runs: '251',
      badge: 'Fast Coder',
      trend: '1',
    },
    {
      rank: 4,
      name: 'LogicLion',
      score: '2,156',
      runs: '138',
      badge: 'Power Hitter',
      trend: '3',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <main className="max-w-7xl mx-auto px-6 py-10">

        <section>
          <h1 className="text-7xl font-black tracking-tight">
            Social Arena
          </h1>

          <p className="text-3xl text-zinc-500 mt-5">
            Compete with developers and climb the leaderboard
          </p>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center">
                <Trophy />
              </div>

              <div>
                <p className="text-zinc-500 font-medium">
                  Global Rank
                </p>

                <h2 className="text-5xl font-black mt-2">
                  #142
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                <Flame />
              </div>

              <div>
                <p className="text-zinc-500 font-medium">
                  Active Streak
                </p>

                <h2 className="text-5xl font-black mt-2">
                  14
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                <Shield />
              </div>

              <div>
                <p className="text-zinc-500 font-medium">
                  Team Rank
                </p>

                <h2 className="text-5xl font-black mt-2">
                  Top 5%
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Medal />
              </div>

              <div>
                <p className="text-zinc-500 font-medium">
                  Wins
                </p>

                <h2 className="text-5xl font-black mt-2">
                  38
                </h2>
              </div>
            </div>
          </div>

        </section>

        <section className="bg-white rounded-[36px] border border-zinc-200 shadow-sm overflow-hidden mt-14">

          <div className="p-8 border-b border-zinc-200">
            <h2 className="text-5xl font-black">
              Leaderboard
            </h2>

            <p className="text-zinc-500 text-2xl mt-4">
              Top developers this week
            </p>
          </div>

          <div>
            {players.map((player) => (
              <LeaderboardRow
                key={player.rank}
                rank={player.rank}
                name={player.name}
                score={player.score}
                runs={player.runs}
                badge={player.badge}
                trend={player.trend}
              />
            ))}
          </div>

          <div className="flex justify-between items-center px-8 py-6 bg-zinc-50">
            <p className="text-2xl text-zinc-600">
              <span className="font-black text-zinc-900">
                8
              </span>{' '}
              players competing
            </p>

            <div className="flex items-center gap-3 text-emerald-500 font-bold text-xl">
              <Medal size={18} />
              Updated live
            </div>
          </div>

        </section>

        <section className="bg-white rounded-[36px] border border-zinc-200 shadow-sm p-8 mt-12 mb-20">

          <h2 className="text-5xl font-black mb-10">
            Coming Soon
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ComingSoonCard
              title="Friend Challenges"
              description="Challenge your friends to coding duels and compete head-to-head"
              icon={<Users />}
            />

            <ComingSoonCard
              title="Team Tournaments"
              description="Join or create teams and compete in weekly tournaments"
              icon={<Trophy />}
            />

            <ComingSoonCard
              title="Activity Feed"
              description="See what your friends are working on and celebrate their wins"
              icon={<Activity />}
            />

            <ComingSoonCard
              title="Global Events"
              description="Participate in global coding marathons and special events"
              icon={<Globe />}
            />

          </div>

        </section>

      </main>
      <Footer/>
    </div>
  )
}
