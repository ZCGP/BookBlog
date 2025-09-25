

import { useState } from "react";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-gray-800">
              BookBlog
            </span>
          </a>
        </div>

        {/* Links - Desktop */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Best Sellers
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Authors
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            About Us
          </a>
        </div>

        {/* Login - Desktop */}
        <div className="hidden lg:flex">
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:text-indigo-800"
          >
            Log in →
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-gray-700 hover:text-indigo-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="flex items-center space-x-2">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Logo"
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold text-gray-800">
                  Your Company
                </span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 hover:text-red-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-indigo-600"
              >
                Product
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-indigo-600"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-indigo-600"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-indigo-600"
              >
                Company
              </a>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                Log in →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
