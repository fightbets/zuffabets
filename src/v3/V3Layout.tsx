import { Outlet } from 'react-router-dom'
import V3Header from './V3Header'
import V3Footer from './V3Footer'

export default function V3Layout() {
  return (
    <div className="v3-bg min-h-screen flex flex-col">
      <V3Header />
      <main className="flex-1"><Outlet /></main>
      <V3Footer />
    </div>
  )
}
