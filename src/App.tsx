import React from 'react';
import Header from './components/Header';
import ElementCard from './components/ElementCard';
import { htmlElements } from './data/htmlElements';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            HTML Elemente Cheatsheet
          </h2>
          <p className="text-gray-400 text-lg">
            {htmlElements.length} HTML-Elemente mit Code und Beispielen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {htmlElements.map((element) => (
            <ElementCard key={element.name} element={element} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            HTML Cheatsheet - Alle wichtigen HTML-Elemente auf einen Blick
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
