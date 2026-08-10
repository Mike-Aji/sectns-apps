import React, { useState } from 'react';
import { MapPin, Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  // State to handle mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <MapPin className="w-6 h-6 fill-current" />
          <span className="text-gray-900">LocalSpot</span>
        </a>

        {/* --- DESKTOP NAV LINKS --- */}
        {/* 'hidden' on mobile, 'md:flex' on medium screens (768px+) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="flex items-center gap-1.5 text-red-500 font-semibold">
            <Heart className="w-4 h-4 fill-current" />
            Favorites
          </a>
        </nav>

        {/* --- HAMBURGER BUTTON (MOBILE ONLY) --- */}
        {/* 'flex' on mobile, 'md:hidden' hides it on desktop */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-gray-700 hover:text-black focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {/* Swaps icon when open */}
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {/* Appears below header only when isOpen is true on mobile */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 shadow-lg z-50 flex flex-col gap-4">
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-red-500 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="w-4 h-4 fill-current" />
            Favorites
          </a>
        </nav>
      )}
    </header>
  );
}