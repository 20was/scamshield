import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ScamShield
              </Link>
            </div>
            <nav className="ml-6 flex space-x-8">
              <Link 
                href="/report" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Report
              </Link>
              <Link 
                href="/browse" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Browse
              </Link>
              <Link 
                href="/education" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Education
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Link 
              href="/login" 
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Log in
            </Link>
            <Link 
              href="/register" 
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

