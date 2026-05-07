import {
  Mail,
  Github,
  Link,
  Calendar,
  Trophy,
  Target,
  Medal,
  Settings,
} from 'lucide-react'
import Footer from '../components/Footer'

function ProgressCircle({
  percentage,
  label,
  subtitle,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">

        <svg className="w-40 h-40 -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="65"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="80"
            cy="80"
            r="65"
            stroke="#10b981"
            strokeWidth="10"
            fill="none"
            strokeDasharray={408}
            strokeDashoffset={
              408 - (408 * percentage) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-black">
            {percentage}%
          </h2>

          <p className="text-zinc-500 font-medium mt-1">
            {label}
          </p>
        </div>

      </div>

      <p className="text-zinc-600 text-xl mt-5">
        {subtitle}
      </p>
    </div>
  )
}

function BadgeCard({
  emoji,
  title,
  color,
}) {
  return (
    <div className="flex flex-col items-center">

      <div
        className={`w-28 h-28 rounded-[28px] ${color} shadow-lg flex items-center justify-center text-5xl`}
      >
        {emoji}
      </div>

      <p className="font-bold text-xl mt-4">
        {title}
      </p>

    </div>
  )
}

export default function Profile() {

  const badges = [
    {
      emoji: '🏏',
      title: 'First Run',
      color: 'bg-zinc-300',
    },
    {
      emoji: '💯',
      title: 'Century',
      color: 'bg-blue-400',
    },
    {
      emoji: '⚔️',
      title: 'Week Warrior',
      color: 'bg-purple-400',
    },
    {
      emoji: '🎩',
      title: 'Hat-trick',
      color: 'bg-blue-400',
    },
    {
      emoji: '⚡',
      title: 'Speed Demon',
      color: 'bg-blue-400',
    },
    {
      emoji: '🌅',
      title: 'Early Bird',
      color: 'bg-zinc-300',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      <main className="max-w-7xl mx-auto px-6 py-10">

        <section>
          <h1 className="text-7xl font-black tracking-tight">
            Your Coding Career
          </h1>

          <p className="text-3xl text-zinc-500 mt-5">
            View your journey, achievements, and performance
          </p>
        </section>

        <section className="bg-white rounded-[40px] border border-zinc-200 shadow-sm p-10 mt-12">

          <div className="grid xl:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-7xl font-black">
                CodeMaster
              </h2>

              <div className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-3xl mt-8 shadow-lg">
                <span className="text-2xl">
                  ⭐
                </span>

                <div>
                  <p className="font-black text-lg">
                    ALL-ROUNDER
                  </p>

                  <p className="text-sm opacity-90">
                    Balanced Excellence
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">

                <div className="px-6 py-3 rounded-2xl bg-black text-white font-bold">
                  ELITE DIVISION
                </div>

                <div className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-500 border border-emerald-200 font-bold">
                  Level 24
                </div>

                <div className="px-6 py-3 rounded-2xl bg-blue-50 text-blue-500 border border-blue-200 font-bold">
                  T20 Player
                </div>

              </div>

            </div>

            <div className="flex justify-center">

              <div className="w-[300px] h-[420px] rounded-[40px] bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-[0_0_80px_rgba(16,185,129,0.45)] relative overflow-hidden">

                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white/80 border-8 border-white flex items-center justify-center text-6xl font-black text-emerald-500">
                  10
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[220px] bg-white/20 backdrop-blur-xl rounded-3xl py-5 text-center text-white text-4xl font-black">
                  CodeMaster
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-white/30 text-white text-xl font-bold backdrop-blur-xl">
                  AMATEUR
                </div>

              </div>

            </div>

          </div>

          <div className="bg-zinc-50 rounded-[32px] border border-zinc-200 p-8 mt-12">

            <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase tracking-wider">
              <Trophy size={18} />
              Career Statistics
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">

              <div>
                <h2 className="text-7xl font-black text-emerald-500">
                  2,847
                </h2>

                <p className="text-zinc-500 font-bold mt-3">
                  CAREER RUNS
                </p>
              </div>

              <div>
                <h2 className="text-7xl font-black text-blue-500">
                  142
                </h2>

                <p className="text-zinc-500 font-bold mt-3">
                  STRIKE RATE
                </p>
              </div>

              <div>
                <h2 className="text-7xl font-black text-purple-500">
                  38
                </h2>

                <p className="text-zinc-500 font-bold mt-3">
                  AVERAGE
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-dashed border-zinc-300 text-center">

              <div>
                <h3 className="text-5xl font-black">
                  75
                </h3>

                <p className="text-zinc-500 mt-2 font-bold">
                  INNINGS
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-yellow-500">
                  42
                </h3>

                <p className="text-zinc-500 mt-2 font-bold">
                  STREAK
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-emerald-500">
                  85%
                </h3>

                <p className="text-zinc-500 mt-2 font-bold">
                  FORM
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black">
                  S4 2026
                </h3>

                <p className="text-zinc-500 mt-2 font-bold">
                  BEST
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="grid xl:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm">

            <h2 className="text-4xl font-black">
              Account Info
            </h2>

            <div className="space-y-5 mt-8">

              <div className="bg-zinc-50 rounded-2xl p-5 flex items-center gap-4 text-xl">
                <Mail className="text-zinc-400" />
                codemaster@example.com
              </div>

              <div className="bg-zinc-50 rounded-2xl p-5 flex items-center gap-4 text-xl">
                <Github className="text-zinc-400" />
                @codemaster
              </div>

              <div className="bg-zinc-50 rounded-2xl p-5 flex items-center gap-4 text-xl">
                <Link className="text-zinc-400" />
                codemaster.dev
              </div>

              <div className="bg-zinc-50 rounded-2xl p-5 flex items-center gap-4 text-xl">
                <Calendar className="text-zinc-400" />
                Joined 3 months ago
              </div>

            </div>

            <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-5 rounded-2xl font-black text-2xl shadow-lg transition-all flex items-center justify-center gap-3">
              <Settings size={20} />
              Edit Profile
            </button>

          </div>

          <div className="bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm">

            <h2 className="text-4xl font-black">
              Skill Progress
            </h2>

            <div className="space-y-8 mt-10">

              {[
                {
                  label: 'DSA',
                  value: '75%',
                  width: '75%',
                  color: 'bg-emerald-500',
                },
                {
                  label: 'Development',
                  value: '60%',
                  width: '60%',
                  color: 'bg-blue-500',
                },
                {
                  label: 'Learning',
                  value: '45%',
                  width: '45%',
                  color: 'bg-yellow-500',
                },
              ].map((item) => (
                <div key={item.label}>

                  <div className="flex justify-between mb-3">
                    <p className="font-bold text-2xl">
                      {item.label}
                    </p>

                    <p className="font-black text-2xl">
                      {item.value}
                    </p>
                  </div>

                  <div className="h-4 rounded-full bg-zinc-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: item.width }}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm">

            <div className="flex items-center gap-3">
              <Trophy className="text-emerald-500" />

              <h2 className="text-4xl font-black">
                Season History
              </h2>
            </div>

            <div className="space-y-5 mt-8">

              {[
                {
                  season: 'Season 5',
                  rank: '#142',
                  runs: '847 runs',
                  medal: '🥈',
                  title: 'RUNNER-UP',
                },
                {
                  season: 'Season 4',
                  rank: '#89',
                  runs: '1245 runs',
                  medal: '🥇',
                  title: 'CHAMPION',
                },
                {
                  season: 'Season 3',
                  rank: '#201',
                  runs: '755 runs',
                  medal: '🥉',
                  title: 'THIRD PLACE',
                },
              ].map((item) => (
                <div
                  key={item.season}
                  className="border border-zinc-200 rounded-[28px] p-5 flex items-center gap-5"
                >

                  <div className="w-24 h-24 rounded-[24px] bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-5xl shadow-lg">
                    {item.medal}
                  </div>

                  <div>
                    <h3 className="text-3xl font-black">
                      {item.season}
                    </h3>

                    <p className="text-zinc-500 mt-2">
                      Rank {item.rank}
                    </p>

                    <p className="text-emerald-500 font-black mt-2">
                      {item.runs}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        <section className="bg-white rounded-[36px] border border-zinc-200 shadow-sm p-8 mt-12">

          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-black">
              Recent Badges
            </h2>

            <button className="text-emerald-500 font-black text-2xl">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-10">

            {badges.map((badge) => (
              <BadgeCard
                key={badge.title}
                emoji={badge.emoji}
                title={badge.title}
                color={badge.color}
              />
            ))}

          </div>

        </section>

        <section className="bg-white rounded-[36px] border border-zinc-200 shadow-sm p-10 mt-12">

          <h2 className="text-5xl font-black">
            Activity Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-12">

            <ProgressCircle
              percentage={68}
              label="Daily Goal"
              subtitle="68/100 runs today"
            />

            <ProgressCircle
              percentage={85}
              label="Weekly Goal"
              subtitle="425/500 runs this week"
            />

            <ProgressCircle
              percentage={57}
              label="Monthly Goal"
              subtitle="1,140/2,000 runs this month"
            />

          </div>

        </section>

        <section className="bg-white border-2 border-emerald-500 rounded-[36px] p-10 mt-12 mb-20">

          <h2 className="text-5xl font-black">
            Upgrade to Premium
          </h2>

          <p className="text-zinc-500 text-2xl mt-5">
            Unlock advanced analytics, custom badges, and priority support
          </p>

          <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-lg transition-all">
            Learn More
          </button>

        </section>

      </main>
      <Footer/>

    </div>
  )
}
