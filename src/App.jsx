import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Dashboard from './pages/Dashboard'
import Matches from './pages/Matches'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/matches"
          element={<Matches />}
        />
      </Routes>
    </div>
  )
}