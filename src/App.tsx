import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ElementCard from './components/ElementCard';
import { htmlElements } from './data/htmlElements';
import { BookOpen, Code, Palette, Zap, Star, Heart } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories: Category[] = [
    { id: 'all', name: 'Alle Elemente', icon: Star, color: 'bg-gradient-to-r from-purple-400 to-pink-400' },
    { id: 'text', name: 'Text & Formatierung', icon: BookOpen, color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
    { id: 'heading', name: 'Überschriften', icon: Code, color: 'bg-gradient-to-r from-green-400 to-emerald-400' },
    { id: 'layout', name: 'Layout & Struktur', icon: Palette, color: 'bg-gradient-to-r from-purple-400 to-indigo-400' },
    { id: 'media', name: 'Bilder & Medien', icon: Zap, color: 'bg-gradient-to-r from-orange-400 to-red-400' },
    { id: 'form', name: 'Formulare', icon: Heart, color: 'bg-gradient-to-r from-red-400 to-pink-400' },
    { id: 'semantic', name: 'Semantische Elemente', icon: Star, color: 'bg-gradient-to-r from-indigo-400 to-purple-400' }
  ];

  const filteredElements = htmlElements.filter(element => {
    const matchesCategory = selectedCategory === 'all' || element.category === selectedCategory;
    const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         element.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         element.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <Navigation 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {selectedCategory === 'all' ? 'Alle HTML-Elemente' : 
             categories.find(cat => cat.id === selectedCategory)?.name}
          </h2>
          <p className="text-gray-600 text-lg">
            {filteredElements.length} Elemente gefunden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredElements.map((element) => (
            <ElementCard key={element.name} element={element} />
          ))}
        </div>

        {filteredElements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Keine Elemente gefunden
            </h3>
            <p className="text-gray-500">
              Versuche andere Suchbegriffe oder wähle eine andere Kategorie aus.
            </p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            🎨 HTML Cheatsheet für Kinder - Lerne spielerisch Webseiten zu bauen!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Alle HTML-Elemente mit Beispielen und Erklärungen
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
