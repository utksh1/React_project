import { NavLink } from 'react-router-dom'

import {
  LayoutDashboard,
  Trophy,
  Target,
  ShieldCheck,
  BarChart3,
  Users,
  User,
} from 'lucide-react'

const navItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },

  {
    name: 'Matches',
    path: '/matches',
    icon: Trophy,
  },

  {
    name: 'Missions',
    path: '/missions',
    icon: Target,
  },

  {
    name: 'Badges',
    path: '/badges',
    icon: ShieldCheck,
  },

  {
    name: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },

  {
    name: 'Social',
    path: '/social',
    icon: Users,
  },

  {
    name: 'Profile',
    path: '/profile',
    icon: User,
  },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <Trophy className="text-white" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-black text-zinc-900">
                Cricket Coding
              </h1>

              <p className="text-zinc-500 font-medium">
                Track • Code • Conquer
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav className="hidden xl:flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3
                    px-6 py-4
                    rounded-2xl
                    font-bold
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'text-zinc-600 hover:bg-zinc-100'
                    }
                  `
                  }
                >
                  <Icon size={20} />

                  {item.name}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}