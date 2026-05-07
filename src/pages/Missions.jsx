import {
  Target,
  Trophy,
  Crown,
  Zap,
  Calendar,
  Medal,
  Clock3,
} from 'lucide-react'
import Footer from '../components/Footer'
function ProgressCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
          {icon}
        </div>

        <div>
          <p className="text-zinc-500 font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-black mt-1">
            {value}
          </h2>

          <p className="text-zinc-400 mt-1">
            missions completed
          </p>
        </div>
      </div>
    </div>
  )
}

function MissionCard({
  color,
  badge,
  title,
  subtitle,
  progress,
  total,
  runs,
  xp,
  completed,
  reward,
}) {
  return (
    <div
      className={`rounded-[30px] overflow-hidden border-2 shadow-lg ${color}`}
    >
      <div className="p-7 border-b border-black/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl">
              ⚡
            </div>

            <span className="px-5 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm tracking-wide">
              {badge}
            </span>
          </div>

          <div className="bg-white/80 px-4 py-2 rounded-full text-sm font-semibold text-zinc-600 flex items-center gap-2">
            <Clock3 size={16} />
            18h left
          </div>
        </div>

        <h2 className="text-4xl font-black mt-8">
          {title}
        </h2>

        <p className="text-zinc-600 text-lg mt-3">
          {subtitle}
        </p>

        <div className="bg-white rounded-[24px] p-5 mt-7 border border-zinc-100">
          <div className="flex justify-between font-bold text-zinc-500 uppercase tracking-wide text-sm">
            <span>Progress</span>
            <span>
              {progress}/{total}
            </span>
          </div>

          <div className="h-4 bg-zinc-200 rounded-full mt-5 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{
                width: `${(progress / total) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="p-7 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-emerald-100 text-emerald-700 px-5 py-3 rounded-2xl font-bold">
            +{runs}
          </div>

          <div className="font-black text-2xl">
            +{xp} XP
          </div>

          {reward && (
            <div className="bg-violet-100 text-violet-600 px-4 py-2 rounded-full font-bold">
              🏅 {reward}
            </div>
          )}
        </div>

        {completed && (
          <button className="bg-emerald-500 hover:bg-emerald-600 transition px-8 py-4 rounded-2xl text-white font-black shadow-lg">
            Claim 🎉
          </button>
        )}
      </div>
    </div>
  )
}

export default function Missions() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <main className="max-w-7xl mx-auto px-6 py-10">

        <section>
          <h1 className="text-7xl font-black tracking-tight">
            Missions & Challenges
          </h1>

          <p className="text-3xl text-zinc-500 mt-5">
            Complete missions to earn runs, XP, and exclusive badges
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-12">
          <ProgressCard
            icon={<Zap />}
            title="Daily Progress"
            value="1/3"
          />

          <ProgressCard
            icon={<Calendar />}
            title="Weekly Progress"
            value="1/3"
          />

          <ProgressCard
            icon={<Target />}
            title="Special Progress"
            value="0/2"
          />
        </section>

        <section className="mt-16">
          <h2 className="text-5xl font-black mb-8">
            Daily Missions
          </h2>

          <div className="grid xl:grid-cols-3 gap-8">
            <MissionCard
              color="bg-emerald-50 border-emerald-300"
              badge="DAILY"
              title="Daily DSA Practice"
              subtitle="Solve 3 DSA problems of any difficulty"
              progress={1}
              total={3}
              runs={30}
              xp={150}
            />

            <MissionCard
              color="bg-emerald-50 border-emerald-300"
              badge="DAILY"
              title="Code Commit Streak"
              subtitle="Make at least 1 meaningful commit"
              progress={1}
              total={1}
              runs={20}
              xp={100}
              completed
            />

            <MissionCard
              color="bg-emerald-50 border-emerald-300"
              badge="DAILY"
              title="Learning Hour"
              subtitle="Complete 1 learning module or tutorial"
              progress={0}
              total={1}
              runs={25}
              xp={125}
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-5xl font-black mb-8">
            Weekly Missions
          </h2>

          <div className="grid xl:grid-cols-3 gap-8">
            <MissionCard
              color="bg-blue-50 border-blue-300"
              badge="WEEKLY"
              title="DSA Master"
              subtitle="Solve 20 DSA problems this week"
              progress={12}
              total={20}
              runs={200}
              xp={1000}
              reward="Week Warrior"
            />

            <MissionCard
              color="bg-blue-50 border-blue-300"
              badge="WEEKLY"
              title="Project Builder"
              subtitle="Make 30 commits across your projects"
              progress={18}
              total={30}
              runs={150}
              xp={750}
            />

            <MissionCard
              color="bg-blue-50 border-blue-300"
              badge="WEEKLY"
              title="Knowledge Seeker"
              subtitle="Complete 5 learning modules"
              progress={5}
              total={5}
              runs={100}
              xp={500}
              reward="Scholar"
              completed
            />
          </div>
        </section>

        <section className="mt-20 pb-20">
          <h2 className="text-5xl font-black mb-8">
            Special Challenges
          </h2>

          <div className="grid xl:grid-cols-2 gap-8">
            <MissionCard
              color="bg-violet-50 border-violet-300"
              badge="SPECIAL"
              title="Century Challenge"
              subtitle="Score 100 runs in a single day"
              progress={67}
              total={100}
              runs={500}
              xp={2500}
              reward="Century King"
            />

            <MissionCard
              color="bg-violet-50 border-violet-300"
              badge="SPECIAL"
              title="All-Rounder Achievement"
              subtitle="Complete activities in all categories in one day"
              progress={2}
              total={3}
              runs={300}
              xp={1500}
              reward="All-Rounder"
            />
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}
