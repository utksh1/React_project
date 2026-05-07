import { BookmarkCheck, Lock } from 'lucide-react'
import Footer from '../components/Footer'

function BadgeStat({ title, value, color }) {
  return (
    <div className="bg-white rounded-[26px] border border-zinc-200 p-6 shadow-sm relative">
      <div
        className={`absolute top-6 right-6 w-4 h-4 rounded-full ${color}`}
      />

      <p className="uppercase tracking-wide text-sm font-bold text-zinc-500">
        {title}
      </p>

      <h2 className="text-5xl font-black mt-4">
        {value}
      </h2>
    </div>
  )
}

function BadgeCard({ emoji, title, locked, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          w-28 h-28 rounded-[28px]
          flex items-center justify-center
          text-5xl shadow-lg border
          ${locked
            ? 'bg-zinc-100 border-zinc-200 text-zinc-400'
            : color}
        `}
      >
        {locked ? <Lock size={42} /> : emoji}
      </div>

      <h3 className="font-black text-lg mt-4 text-center">
        {title}
      </h3>
    </div>
  )
}

export default function Badges() {
  const unlocked = [
    {
      emoji: '🏏',
      title: 'First Run',
      color: 'bg-zinc-300 border-zinc-400',
    },
    {
      emoji: '🌅',
      title: 'Early Bird',
      color: 'bg-zinc-300 border-zinc-400',
    },
    {
      emoji: '🦉',
      title: 'Night Owl',
      color: 'bg-zinc-300 border-zinc-400',
    },
    {
      emoji: '1️⃣',
      title: 'Quick Single',
      color: 'bg-zinc-300 border-zinc-400',
    },
    {
      emoji: '5️⃣0️⃣',
      title: 'Half Century',
      color: 'bg-blue-400 border-blue-500',
    },
    {
      emoji: '💯',
      title: 'Century',
      color: 'bg-blue-400 border-blue-500',
    },
    {
      emoji: '⚔️',
      title: 'Week Warrior',
      color: 'bg-violet-400 border-violet-500',
    },
    {
      emoji: '🎩',
      title: 'Hat-trick',
      color: 'bg-blue-400 border-blue-500',
    },
    {
      emoji: '⚡',
      title: 'Speed Demon',
      color: 'bg-blue-400 border-blue-500',
    },
  ]

  const locked = [
    'Code Master',
    'Legend',
    'Marathoner',
    'Bug Hunter',
    'Top Ranker',
    'Streak Lord',
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <main className="max-w-7xl mx-auto px-6 py-10">

        <section>
          <h1 className="text-7xl font-black tracking-tight">
            Badge Collection
          </h1>

          <p className="text-3xl text-zinc-500 mt-5">
            Unlock badges by completing challenges and achieving milestones
          </p>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          <BadgeStat
            title="Common"
            value="4/4"
            color="bg-zinc-400"
          />

          <BadgeStat
            title="Rare"
            value="4/4"
            color="bg-blue-500"
          />

          <BadgeStat
            title="Epic"
            value="1/5"
            color="bg-violet-500"
          />

          <BadgeStat
            title="Legendary"
            value="0/5"
            color="bg-orange-500"
          />
        </section>

        <section className="mt-16">
          <div className="flex items-center gap-3 mb-10">
            <BookmarkCheck className="text-emerald-500" />

            <h2 className="text-5xl font-black">
              Unlocked Badges (9)
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12">
            {unlocked.map((badge) => (
              <BadgeCard
                key={badge.title}
                emoji={badge.emoji}
                title={badge.title}
                color={badge.color}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <Lock className="text-zinc-400" />

            <h2 className="text-5xl font-black">
              Locked Badges (9)
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12">
            {locked.map((badge) => (
              <BadgeCard
                key={badge}
                title={badge}
                locked
              />
            ))}
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}
