import { Link } from 'react-router-dom'

export default function V4Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 text-sm text-gray-500">
          <div className="space-y-3">
            <Link to="/v4" className="text-gray-400 hover:text-white transition no-underline block">Home</Link>
            <Link to="/v4/about" className="text-gray-400 hover:text-white transition no-underline block">About</Link>
            <a href="https://fightbets.com?source=zuffabets-v4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition no-underline block">FightBets</a>
          </div>
          <div className="space-y-3">
            <Link to="/v4/tag/history" className="text-gray-400 hover:text-white transition no-underline block">History</Link>
            <Link to="/v4/tag/business" className="text-gray-400 hover:text-white transition no-underline block">Business</Link>
            <Link to="/v4/tag/dana-white" className="text-gray-400 hover:text-white transition no-underline block">Dana White</Link>
          </div>
          <div className="space-y-3">
            <a href="https://twitter.com/zuffabets" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition no-underline block">Twitter/X</a>
            <a href="https://instagram.com/zuffabets" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition no-underline block">Instagram</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} ZuffaBets</p>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-400 transition no-underline">V1</Link>
            <Link to="/v2" className="text-gray-600 hover:text-gray-400 transition no-underline">V2</Link>
            <Link to="/v3" className="text-gray-600 hover:text-gray-400 transition no-underline">V3</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
