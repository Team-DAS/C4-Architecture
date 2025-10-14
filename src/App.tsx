import { useState } from 'react'
import Navbar from './components/Navbar'
import CellNavbar from './components/CellNavbar'

// Sample data for microservices
const cellsData = {
  projects: [
    { id: 'projects-service', name: 'Projects Service', port: 8071, docsUrl: 'https://team-das.github.io/projects-cell/projects-service/', readmeUrl: 'https://github.com/Team-DAS/projects-cell/blob/main/projects-service/README.md', status: 'online' as const },
  ],
  profile: [
    { id: 'profile-service', name: 'Profile Service', port: 8091, docsUrl: 'https://team-das.github.io/profile-cell/profile-service', readmeUrl: 'https://github.com/Team-DAS/profile-cell/blob/main/profile-service/README.md', status: 'online' as const },
    { id: 'file-service', name: 'File Service', port: 8092, docsUrl: 'https://team-das.github.io/profile-cell/file-service', readmeUrl: 'https://github.com/Team-DAS/profile-cell/blob/main/file-service/README.md', status: 'online' as const },
    { id: 'profile-gateway', name: 'Profile Gateway', port: 8090, docsUrl: 'https://team-das.github.io/profile-cell/profile-gateway', readmeUrl: 'https://github.com/Team-DAS/profile-cell/blob/main/profile-gateway/README.md', status: 'online' as const },
  ],
  identity: [
    { id: 'auth-service', name: 'Auth Service', port: 8081, docsUrl: 'https://team-das.github.io/identity-cell/auth-service', readmeUrl: 'https://github.com/Team-DAS/identity-cell/blob/main/auth-service/README.md', status: 'online' as const },
    { id: 'account-service', name: 'Account Service', port: 8082, docsUrl: 'https://team-das.github.io/identity-cell/account-service', readmeUrl: 'https://github.com/Team-DAS/identity-cell/tree/main/account-service/README.md', status: 'online' as const },
    { id: 'authz-service', name: 'Authorization Service', port: 8083, docsUrl: 'https://team-das.github.io/identity-cell/authz-service', readmeUrl: 'https://github.com/Team-DAS/identity-cell/blob/main/authz-service/README.md', status: 'online' as const },
    { id: 'identity-gateway', name: 'Identity Gateway', port: 8080, docsUrl: 'https://team-das.github.io/identity-cell/identity-gateway', readmeUrl: 'https://github.com/Team-DAS/identity-cell/blob/main/identity-gateway/README.md', status: 'online' as const },
  ],
  infrastructure: [
    { id: 'message-broker', name: 'Message Broker', port: 5672, readmeUrl: 'https://github.com/Team-DAS/infrastructure-cell/blob/main/message-broker/README.md', status: 'unknown' as const },
    { id: 'observability', name: 'Observability Stack', port: 3000, readmeUrl: 'https://github.com/Team-DAS/infrastructure-cell/blob/main/observability/README.md', status: 'unknown' as const },
  ],
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'architecture', label: 'Architecture Visualization', icon: '🏗️' },
  { id: 'services', label: 'Services', icon: '⚙️' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Cell Based Architecture Project
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Navigate through cells, services, and documentation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl p-1">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">System Overview</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">Complete microservices architecture with 4 main cells and multiple services.</p>
              <div className="text-sm text-slate-500">
                <div className="flex justify-between"><span>Total Cells:</span><span className="font-semibold">4</span></div>
                <div className="flex justify-between"><span>Total Services:</span><span className="font-semibold">{Object.values(cellsData).flat().length}</span></div>
                <div className="flex justify-between"><span>unknown Services:</span><span className="font-semibold text-green-600">{Object.values(cellsData).flat().filter(s => s.status === 'unknown').length}</span></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">Documentation</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">Access JavaDocs and API documentation for each microservice.</p>
              <button 
                onClick={() => setActiveTab('services')}
                className="text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                View Services →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">Architecture</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">Interactive C4 diagrams showing system architecture and relationships.</p>
              <button 
                onClick={() => setActiveTab('architecture')}
                className="text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                View Diagrams →
              </button>
            </div>
          </div>
        )}

        {/* Architecture Visualization Tab */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">C4 Architecture Diagram</h2>
                <p className="text-slate-600 mb-6">Interactive C4 Model diagram showing the system architecture and component relationships</p>
                <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                  <iframe
                    src="https://s.icepanel.io/m2wHcs0VDGoam5/oALB"
                    className="absolute inset-0 w-full h-full rounded-xl border border-slate-300"
                    title="Architecture Diagram"
                    style={{
                      minHeight: '600px',
                      border: 'none',
                      borderRadius: '12px',
                    }}
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Interactive C4 Architecture Diagram</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Powered by IcePanel
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            {/* Main Content with Cell Navigation Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CellNavbar cellName="projects" services={cellsData.projects} />
              <CellNavbar cellName="profile" services={cellsData.profile} />
              <CellNavbar cellName="identity" services={cellsData.identity} />
              <CellNavbar cellName="infrastructure" services={cellsData.infrastructure} />
            </div>

            {/* Additional Services Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 ml-3">API Documentation</h3>
                  </div>
                  <p className="text-slate-600 text-sm">Access Swagger UI and JavaDocs for each microservice through the sidebar navigation.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 ml-3">Health Monitoring</h3>
                  </div>
                  <p className="text-slate-600 text-sm">Real-time status indicators show which microservices are unknown, unknown, or in unknown state.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 ml-3">Quick Access</h3>
                  </div>
                  <p className="text-slate-600 text-sm">View all services for each cell and use "View" buttons for detailed service information.</p>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}
