import {
  Trophy,
  Calendar,
  Target,
  Zap,
} from 'lucide-react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const matchCards = [
  {
    title: 'T20 Format',
    value: '41.5',
    desc1: 'Average runs • 8 matches',
    desc2: 'Daily coding challenges',
    icon: Trophy,
  },
  {
    title: 'ODI Format',
    value: '149',
    desc1: 'Average runs • 4 matches',
    desc2: 'Weekly sprints',
    icon: Calendar,
  },
  {
    title: 'Test Format',
    value: '342',
    desc1: 'Total runs • 1 match',
    desc2: 'Monthly marathons',
    icon: Target,
  },
]

const performanceData = [
  {
    name: 'T20',
    avgRuns: 41,
  },
  {
    name: 'ODI',
    avgRuns: 149,
  },
  {
    name: 'Test',
    avgRuns: 342,
  },
]

const pieData = [
  {
    name: 'DSA',
    value: 45,
    color: '#10b981',
  },
  {
    name: 'Development',
    value: 35,
    color: '#3b82f6',
  },
  {
    name: 'Learning',
    value: 20,
    color: '#f59e0b',
  },
]

const historyMatches = [
  {
    type: 'T20',
    score: '45/20',
    strike: '225',
    boundaries: '6',
    time: 'Today',
    status: 'Completed',
    color: 'blue',
    emoji: '⚡',
  },
  {
    type: 'T20',
    score: '38/20',
    strike: '190',
    boundaries: '4',
    time: 'Yesterday',
    status: 'Completed',
    color: 'blue',
    emoji: '⚡',
  },
  {
    type: 'ODI',
    score: '156/80',
    strike: '195',
    boundaries: '18',
    time: 'This Week',
    status: 'Batting',
    color: 'orange',
    emoji: '🏆',
  },
  {
    type: 'ODI',
    score: '142/90',
    strike: '158',
    boundaries: '15',
    time: 'Last Week',
    status: 'Completed',
    color: 'orange',
    emoji: '🏆',
  },
  {
    type: 'Test',
    score: '342/200',
    strike: '171',
    boundaries: '45',
    time: 'This Month',
    status: 'LIVE',
    color: 'purple',
    emoji: '👑',
  },
]

const colorStyles = {
  blue: {
    border: 'border-blue-300',
    bg: 'from-blue-50 to-blue-100',
    text: 'text-blue-500',
  },

  orange: {
    border: 'border-orange-300',
    bg: 'from-orange-50 to-orange-100',
    text: 'text-orange-500',
  },

  purple: {
    border: 'border-purple-300',
    bg: 'from-purple-50 to-purple-100',
    text: 'text-purple-500',
  },
}

export default function Matches() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* HEADER */}

      <div className="mb-10">
        <h1 className="text-6xl font-black text-zinc-900">
          Matches
        </h1>

        <p className="text-zinc-500 text-2xl mt-4">
          Track your coding journey across different match formats
        </p>
      </div>

      {/* TOP CARDS */}

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {matchCards.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="bg-white rounded-[30px] border border-zinc-200 p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Icon className="text-emerald-500" size={26} />
                </div>

                <div>
                  <p className="text-zinc-600 font-medium">
                    {item.title}
                  </p>

                  <h2 className="text-5xl font-black mt-1">
                    {item.value}
                  </h2>
                </div>
              </div>

              <div className="mt-6 text-zinc-500 space-y-2 text-lg">
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* CHARTS */}

      <div className="grid xl:grid-cols-2 gap-6 mb-12">

        {/* BAR CHART */}

        <div className="bg-white rounded-[32px] border border-zinc-200 p-8">
          <h2 className="text-4xl font-black mb-8">
            Performance by Match Type
          </h2>

          <div className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="avgRuns"
                  fill="#10b981"
                  radius={[12, 12, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}

        <div className="bg-white rounded-[32px] border border-zinc-200 p-8">
          <h2 className="text-4xl font-black mb-8">
            Activity Breakdown
          </h2>

          <div className="h-[340px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={80}
                  outerRadius={120}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-8 pb-4 flex-wrap">
            {pieData.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: item.color,
                  }}
                />

                <p className="text-zinc-600 text-lg">
                  {item.name} ({item.value}%)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MATCH HISTORY */}

      <div>
        <h2 className="text-5xl font-black mb-8">
          Match History
        </h2>

        <div className="grid xl:grid-cols-3 gap-6">
          {historyMatches.map((match, index) => {
            const style = colorStyles[match.color]

            return (
              <div
                key={index}
                className={`
                  rounded-[32px]
                  border-4
                  ${style.border}
                  bg-gradient-to-br
                  ${style.bg}
                  overflow-hidden
                  shadow-sm
                `}
              >
                {/* TOP */}

                <div className="p-8 border-b border-black/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl">
                        {match.emoji}
                      </div>

                      <div>
                        <h3 className="text-4xl font-black">
                          {match.type}
                        </h3>

                        <p className="uppercase tracking-wider text-zinc-500 font-semibold">
                          Match
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/80 px-5 py-2 rounded-full font-bold text-zinc-600">
                      {match.status}
                    </div>
                  </div>

                  {/* SCORE */}

                  <div className="mt-8 bg-white rounded-[28px] p-8 flex justify-between">
                    <div>
                      <p className="uppercase text-zinc-500 font-bold text-sm">
                        Score
                      </p>

                      <h2 className="text-6xl font-black mt-3">
                        {match.score}
                      </h2>
                    </div>

                    <div className="w-px bg-zinc-200" />

                    <div>
                      <p className="uppercase text-zinc-500 font-bold text-sm">
                        Strike Rate
                      </p>

                      <h2 className={`text-6xl font-black mt-3 ${style.text}`}>
                        {match.strike}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}

                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                      <Target className="text-emerald-500" />
                    </div>

                    <div>
                      <p className="uppercase text-zinc-500 font-bold text-sm">
                        Boundaries
                      </p>

                      <h3 className="text-4xl font-black">
                        {match.boundaries}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-zinc-500 font-bold text-lg">
                      {match.time}
                    </p>

                    {match.status === 'LIVE' && (
                      <div className="flex items-center gap-2 mt-2 text-emerald-500 font-bold">
                        <Zap size={18} />
                        LIVE
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}