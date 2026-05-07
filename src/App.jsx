import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Missions from './pages/Missions'
import Dashboard from './pages/Dashboard'
import Matches from './pages/Matches'
import Analytics from './pages/Analytics'
import Badges from './pages/Badges'
import Social  from './pages/Social'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/badges"
          element={<Badges />}
        />
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route
          path="/matches"
          element={<Matches />}
        />
        <Route
          path="/social"
          element={<Social />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  )
}
