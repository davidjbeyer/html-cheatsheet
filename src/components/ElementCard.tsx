import React from 'react';

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
    return (
      <div 
        className="example-box"
        dangerouslySetInnerHTML={{ __html: element.example }}
      />
    );
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`category-badge ${getCategoryColor(element.category)}`}>
              {element.category}
            </span>
            {element.deprecated && (
              <span className="category-badge bg-red-900 text-red-300">
                Veraltet
              </span>
            )}
            {element.new && (
              <span className="category-badge bg-green-900 text-green-300">
                Neu
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-white mb-1">
            &lt;{element.name}&gt;
          </h3>
          <p className="text-gray-300 text-sm">
            {element.description}
          </p>
        </div>
        <div className="text-xl ml-2">
          {element.emoji}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {element.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* HTML Code */}
      <div className="mb-3">
        <h4 className="font-semibold text-white mb-2 text-sm">HTML Code:</h4>
        <div className="code-block">
          <code className="text-xs whitespace-pre-wrap">
            {element.example}
          </code>
        </div>
      </div>

      {/* Example Preview */}
      <div className="mb-3">
        <h4 className="font-semibold text-white mb-2 text-sm">So sieht es aus:</h4>
        {renderExample()}
      </div>

      {/* Additional Information */}
      {element.attributes && element.attributes.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-white mb-2 text-sm">Wichtige Attribute:</h4>
          <div className="space-y-1">
            {element.attributes.map((attr, index) => (
              <div key={index} className="text-xs">
                <span className="font-mono text-green-400">{attr.name}</span>
                {attr.description && (
                  <span className="text-gray-400 ml-2">- {attr.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {element.tips && element.tips.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-white mb-2 text-sm">Tipps:</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            {element.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ElementCard;
