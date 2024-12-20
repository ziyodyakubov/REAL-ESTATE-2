
export default function Home() {
  return (
    <>
      {/* SECTION-1 STARTED */}
      <section id="section-1">
        <div className="container">
     {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-semibold">DreamHome</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Properties</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-blue-600">
                <span>(257) 388-6655</span>
              </a>
              <button className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
          <div className="text-center">
            
          </div>

          {/* Search Box */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="rent">For Rent</option>
                    <option value="sale">For Sale</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <button className="w-full flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
      {/* SECTION-1 ENDED */}
    </>
  );
}
