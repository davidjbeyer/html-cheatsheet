import React, { useState } from 'react';
import { Copy, Eye, Code, Info, ExternalLink, CheckCircle } from 'lucide-react';

interface Attribute {
  name: string;
  description?: string;
}

interface HTMLElement {
  name: string;
  description: string;
  category: string;
  emoji: string;
  example: string;
  tags: string[];
  attributes?: Attribute[];
  tips?: string[];
  learnMore?: string;
  difficulty: number;
  deprecated?: boolean;
  new?: boolean;
}

interface ElementCardProps {
  element: HTMLElement;
}

function ElementCard({ element }: ElementCardProps) {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(element.example);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fehler beim Kopieren:', err);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      text: 'category-text',
      heading: 'category-heading',
      layout: 'category-layout',
      media: 'category-media',
      form: 'category-form',
      semantic: 'category-semantic'
    };
    return colors[category] || 'category-text';
  };

  const renderExample = () => {
    // Sicherer HTML-Render für Beispiele
    return (
      <div 
        className="example-box"
        dangerouslySetInnerHTML={{ __html: element.example }}
      />
    );
  };

  return (
    <div className="card hover:shadow-xl transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`category-badge ${getCategoryColor(element.category)}`}>
              {element.category}
            </span>
            {element.deprecated && (
              <span className="category-badge bg-red-100 text-red-800">
                Veraltet
              </span>
            )}
            {element.new && (
              <span className="category-badge bg-green-100 text-green-800">
                Neu
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            &lt;{element.name}&gt;
          </h3>
          <p className="text-gray-600 text-sm">
            {element.description}
          </p>
        </div>
        <div className="text-2xl ml-2">
          {element.emoji}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {element.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Example Preview */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-700 flex items-center">
            <Eye className="w-4 h-4 mr-2 text-blue-500" />
            So sieht es aus:
          </h4>
        </div>
        {renderExample()}
      </div>

      {/* Code Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-700 flex items-center">
            <Code className="w-4 h-4 mr-2 text-blue-500" />
            HTML-Code:
          </h4>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              {showCode ? 'Verstecken' : 'Anzeigen'}
            </button>
            <button
              onClick={copyToClipboard}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  Kopiert!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Kopieren
                </>
              )}
            </button>
          </div>
        </div>
        
        {showCode && (
          <div className="code-block">
            <code className="text-sm text-gray-800 whitespace-pre-wrap">
              {element.example}
            </code>
          </div>
        )}
      </div>

      {/* Additional Information */}
      {element.attributes && element.attributes.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-2 text-blue-500" />
            Wichtige Attribute:
          </h4>
          <div className="space-y-1">
            {element.attributes.map((attr, index) => (
              <div key={index} className="text-sm">
                <span className="font-mono text-blue-600">{attr.name}</span>
                {attr.description && (
                  <span className="text-gray-600 ml-2">- {attr.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {element.tips && element.tips.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            💡 Tipps:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {element.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learn More Link */}
      {element.learnMore && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={element.learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Mehr erfahren
          </a>
        </div>
      )}

      {/* Usage Level */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Schwierigkeit:</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-full ${
                  level <= element.difficulty 
                    ? 'bg-blue-500' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementCard;
