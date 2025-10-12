import { useState } from 'react'

const cells = [
  { id: 'projects', label: 'Projects', color: 'bg-emerald-500' },
  { id: 'profile', label: 'Profile', color: 'bg-blue-500' },
  { id: 'identity', label: 'Identity', color: 'bg-purple-500' },
  { id: 'infrastructure', label: 'Infrastructure', color: 'bg-orange-500' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/226932823?s=400&u=2bac8c44274a9052204cd09f66605618d0bb739e&v=4" alt="" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Team DAS</div>
                <div className="text-xs text-slate-500">Proyecto Integrador I</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {cells.map((cell) => (
              <a
                key={cell.id}
                href={`#${cell.id}`}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
              >
                <div className={`w-2 h-2 rounded-full ${cell.color} group-hover:scale-110 transition-transform`}></div>
                {cell.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-2 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              {cells.map((cell) => (
                <a
                  key={cell.id}
                  href={`#${cell.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className={`w-2 h-2 rounded-full ${cell.color}`}></div>
                  {cell.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
