import React from 'react';
import { Search, Filter } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface NavigationProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

function Navigation({ categories, selectedCategory, onCategoryChange, searchTerm, onSearchChange }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Suche nach HTML-Elementen..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105
                  ${isSelected 
                    ? `${category.color} text-white shadow-lg scale-105` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                <span>{category.name}</span>
                {isSelected && (
                  <span className="ml-2 text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Filter Info */}
        {selectedCategory !== 'all' && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">
                Zeige nur: {categories.find(cat => cat.id === selectedCategory)?.name}
              </span>
              <button
                onClick={() => onCategoryChange('all')}
                className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
              >
                Alle anzeigen
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
