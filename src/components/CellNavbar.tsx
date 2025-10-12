type ServiceItem = {
  id: string
  name: string
  port?: number
  docsUrl?: string
  status?: 'online' | 'offline' | 'unknown'
}

interface CellNavbarProps {
  cellName: string
  services: ServiceItem[]
}

export default function CellNavbar({ cellName, services }: CellNavbarProps) {
  const getStatusColor = (status: ServiceItem['status']) => {
    switch (status) {
      case 'online': return 'bg-green-400'
      case 'offline': return 'bg-red-400'
      default: return 'bg-gray-400'
    }
  }

  const getCellColor = (cellName: string) => {
    const colors = {
      'projects': 'from-emerald-500 to-emerald-600',
      'profile': 'from-blue-500 to-blue-600', 
      'identity': 'from-purple-500 to-purple-600',
      'infrastructure': 'from-orange-500 to-orange-600'
    }
    return colors[cellName.toLowerCase() as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getCellColor(cellName)} flex items-center justify-center`}>
            <span className="text-white text-xs font-semibold">
              {cellName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 capitalize">{cellName}</h3>
            <p className="text-xs text-slate-500">{services.length} services</p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="border-t border-slate-100">
        <div className="p-3 space-y-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3 flex-1">
                {/* Status indicator */}
                <div className={`w-2 h-2 rounded-full ${getStatusColor(service.status)}`}></div>
                
                {/* Service info */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{service.name}</p>
                  {service.port && (
                    <p className="text-xs text-slate-500">Port: {service.port}</p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {service.docsUrl && (
                  <a
                    href={service.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                    title="View Documentation"
                  >
                    Docs
                  </a>
                )}
                <a
                  href={`#${service.id}`}
                  className="px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md hover:bg-slate-200 transition-colors"
                  title="View Service Details"
                >
                  View
                </a>
              </div>
            </div>
          ))}
          
          {services.length === 0 && (
            <div className="text-center py-4">
              <p className="text-sm text-slate-500">No services configured</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
