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
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/226932823?s=400&u=2bac8c44274a9052204cd09f66605618d0bb739e&v=4" alt="" />
              </div>
              <div className='flex gap-5'>
                <div className="text-lg font-bold text-slate-800">Team DAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
