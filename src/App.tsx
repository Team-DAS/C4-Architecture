export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Architecture Visualization
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              C4 Model diagram showing the system architecture and component
              relationships
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {/* Navigation Instructions */}
         <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🔍 Navegación por Niveles del Diagrama C4
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  <strong>Haz clic en los iconos azules activos</strong> para
                  navegar a través de los diferentes niveles del modelo C4. Los
                  iconos azules indican que hay un nivel más detallado
                  disponible para explorar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Context Level
                      </div>
                      <div className="text-sm text-gray-600">
                        Vista general del sistema
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Container Level
                      </div>
                      <div className="text-sm text-gray-600">
                        Aplicaciones y servicios
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Component Level
                      </div>
                      <div className="text-sm text-gray-600">
                        Componentes internos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Code Level
                      </div>
                      <div className="text-sm text-gray-600">
                        Clases y métodos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-blue-800">💡 Consejo</span>
                </div>
                <p className="text-blue-700 text-sm">
                  Busca los <strong>iconos azules circulares</strong> en los
                  elementos del diagrama. Si están activos (no grises), puedes
                  hacer clic para hacer zoom y ver más detalles de ese
                  componente específico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Diagram Container */}
          <div className="p-6">
            <div
              className="relative w-full"
              style={{ paddingBottom: "66.67%" }}
            >
              <iframe
                src="https://s.icepanel.io/m2wHcs0VDGoam5/oALB"
                className="absolute inset-0 w-full h-full rounded-xl border border-gray-300"
                title="Argemm Dev's organization - Argemm Dev's landscape"
                style={{
                  minHeight: "600px",
                  border: "none",
                  borderRadius: "12px",
                }}
                allowFullScreen
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Interactive C4 Architecture Diagram</span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Powered by IcePanel
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                System Context
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              High-level view of the system and its interactions with users and
              external systems.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                Interactive
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Click and explore different components to understand their
              relationships and dependencies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                Live Documentation
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Always up-to-date architectural documentation that reflects the
              current system state.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
