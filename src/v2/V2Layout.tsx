import { Outlet } from 'react-router-dom'
import V2Header from './V2Header'
import V2Footer from './V2Footer'

export default function V2Layout() {
  return (
    <div className="v2-bg min-h-screen flex flex-col">
      <V2Header />
      <main id="v2-content" className="flex-1">
        <Outlet />
      </main>
      <V2Footer />
    </div>
  )
}
