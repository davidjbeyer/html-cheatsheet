import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            HTML Cheatsheet
          </h1>
          <p className="text-gray-400 text-lg">
            Alle wichtigen HTML-Elemente mit Code und Beispielen
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
