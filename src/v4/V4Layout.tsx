import { Outlet } from 'react-router-dom'
import V4Header from './V4Header'
import V4Footer from './V4Footer'

export default function V4Layout() {
  return (
    <div className="v4-bg min-h-screen flex flex-col">
      <V4Header />
      <main className="flex-1"><Outlet /></main>
      <V4Footer />
    </div>
  )
}
