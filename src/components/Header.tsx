import React from 'react';
import { Sparkles, Code, Palette } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="text-4xl animate-bounce-slow">🎨</div>
              <div className="text-4xl animate-pulse-slow">💻</div>
              <div className="text-4xl animate-float">✨</div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text text-shadow">
                HTML Cheatsheet für Kinder
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Lerne spielerisch Webseiten zu bauen!
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Interaktiv</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-100 to-yellow-100 px-4 py-2 rounded-full">
              <Code className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Einfach</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
              <Palette className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium">Bunt</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-full border-2 border-yellow-300">
            <span className="text-2xl">🌟</span>
            <span className="text-yellow-800 font-medium">
              Entdecke über 50 HTML-Elemente mit Beispielen!
            </span>
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
