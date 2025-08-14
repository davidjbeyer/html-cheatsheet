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

export const htmlElements: HTMLElement[] = [
  // Überschriften
  {
    name: 'h1',
    description: 'Die wichtigste Überschrift auf der Seite',
    category: 'heading',
    emoji: '📝',
    example: '<h1>Meine erste Webseite</h1>',
    tags: ['Überschrift', 'Titel', 'Haupttitel'],
    difficulty: 1,
    tips: [
      'Verwende nur eine h1 pro Seite',
      'H1 sollte den Hauptinhalt beschreiben'
    ]
  },
  {
    name: 'h2',
    description: 'Eine wichtige Unterüberschrift',
    category: 'heading',
    emoji: '📋',
    example: '<h2>Über mich</h2>',
    tags: ['Überschrift', 'Untertitel', 'Abschnitt'],
    difficulty: 1,
    tips: [
      'H2 für Hauptabschnitte verwenden',
      'Folge der Hierarchie: h1 → h2 → h3'
    ]
  },
  {
    name: 'h3',
    description: 'Eine kleinere Unterüberschrift',
    category: 'heading',
    emoji: '📄',
    example: '<h3>Meine Hobbys</h3>',
    tags: ['Überschrift', 'Unterabschnitt'],
    difficulty: 1
  },

  // Text & Formatierung
  {
    name: 'p',
    description: 'Ein Absatz mit Text',
    category: 'text',
    emoji: '📖',
    example: '<p>Das ist ein normaler Textabsatz. Hier steht der Inhalt.</p>',
    tags: ['Text', 'Absatz', 'Paragraph'],
    difficulty: 1,
    tips: [
      'Verwende p für normale Textabsätze',
      'Jeder p-Tag beginnt in einer neuen Zeile'
    ]
  },
  {
    name: 'strong',
    description: 'Macht Text fett und wichtig',
    category: 'text',
    emoji: '💪',
    example: '<p>Das ist <strong>wichtiger</strong> Text!</p>',
    tags: ['Fett', 'Wichtig', 'Betonung'],
    difficulty: 1,
    tips: [
      'Verwende strong für wirklich wichtige Inhalte',
      'Nicht nur für die Optik, sondern für die Bedeutung'
    ]
  },
  {
    name: 'em',
    description: 'Macht Text kursiv und betont',
    category: 'text',
    emoji: '✍️',
    example: '<p>Das ist <em>betonter</em> Text.</p>',
    tags: ['Kursiv', 'Betonung', 'Hervorhebung'],
    difficulty: 1
  },
  {
    name: 'br',
    description: 'Erzeugt einen Zeilenumbruch',
    category: 'text',
    emoji: '↩️',
    example: 'Erste Zeile<br>Zweite Zeile',
    tags: ['Zeilenumbruch', 'Break', 'Neue Zeile'],
    difficulty: 1,
    tips: [
      'br ist ein selbstschließendes Element',
      'Verwende es sparsam, p ist meist besser'
    ]
  },
  {
    name: 'hr',
    description: 'Erzeugt eine horizontale Linie',
    category: 'text',
    emoji: '➖',
    example: '<p>Text über der Linie</p><hr><p>Text unter der Linie</p>',
    tags: ['Linie', 'Trenner', 'Horizontale Linie'],
    difficulty: 1
  },

  // Layout & Struktur
  {
    name: 'div',
    description: 'Ein Container für andere Elemente',
    category: 'layout',
    emoji: '📦',
    example: '<div class="container">Hier können andere Elemente stehen</div>',
    tags: ['Container', 'Gruppierung', 'Layout'],
    difficulty: 2,
    tips: [
      'div ist ein unsichtbarer Container',
      'Verwende es für Layout und Gruppierung'
    ]
  },
  {
    name: 'span',
    description: 'Ein kleiner Container für Text',
    category: 'layout',
    emoji: '🏷️',
    example: '<p>Das ist <span class="highlight">hervorgehobener</span> Text.</p>',
    tags: ['Inline', 'Text', 'Kleiner Container'],
    difficulty: 2
  },
  {
    name: 'section',
    description: 'Ein thematischer Abschnitt der Seite',
    category: 'layout',
    emoji: '📑',
    example: '<section><h2>Über uns</h2><p>Hier steht der Inhalt...</p></section>',
    tags: ['Abschnitt', 'Semantisch', 'Struktur'],
    difficulty: 2,
    new: true
  },
  {
    name: 'article',
    description: 'Ein eigenständiger Artikel oder Beitrag',
    category: 'layout',
    emoji: '📰',
    example: '<article><h2>Mein Blog-Artikel</h2><p>Artikelinhalt...</p></article>',
    tags: ['Artikel', 'Blog', 'Inhalt'],
    difficulty: 2,
    new: true
  },
  {
    name: 'header',
    description: 'Der Kopfbereich einer Seite oder eines Abschnitts',
    category: 'layout',
    emoji: '🏠',
    example: '<header><h1>Meine Webseite</h1><nav>Navigation</nav></header>',
    tags: ['Kopf', 'Header', 'Navigation'],
    difficulty: 2,
    new: true
  },
  {
    name: 'footer',
    description: 'Der Fußbereich einer Seite',
    category: 'layout',
    emoji: '🏁',
    example: '<footer><p>&copy; 2024 Meine Webseite</p></footer>',
    tags: ['Fuß', 'Footer', 'Ende'],
    difficulty: 2,
    new: true
  },
  {
    name: 'main',
    description: 'Der Hauptinhalt der Seite',
    category: 'layout',
    emoji: '🎯',
    example: '<main><h1>Hauptinhalt</h1><p>Wichtiger Inhalt...</p></main>',
    tags: ['Hauptinhalt', 'Wichtig', 'Zentral'],
    difficulty: 2,
    new: true
  },
  {
    name: 'aside',
    description: 'Nebeninhalt, der nicht zum Hauptinhalt gehört',
    category: 'layout',
    emoji: '📌',
    example: '<aside><h3>Zusätzliche Infos</h3><p>Nebeninformationen...</p></aside>',
    tags: ['Nebeninhalt', 'Zusatz', 'Seitenleiste'],
    difficulty: 3,
    new: true
  },

  // Listen
  {
    name: 'ul',
    description: 'Eine ungeordnete Liste mit Aufzählungspunkten',
    category: 'layout',
    emoji: '📋',
    example: '<ul><li>Erster Punkt</li><li>Zweiter Punkt</li></ul>',
    tags: ['Liste', 'Ungeordnet', 'Aufzählung'],
    difficulty: 1,
    tips: [
      'Verwende ul für Listen ohne Reihenfolge',
      'Jeder Punkt wird mit li erstellt'
    ]
  },
  {
    name: 'ol',
    description: 'Eine geordnete Liste mit Nummerierung',
    category: 'layout',
    emoji: '🔢',
    example: '<ol><li>Erster Schritt</li><li>Zweiter Schritt</li></ol>',
    tags: ['Liste', 'Geordnet', 'Nummeriert'],
    difficulty: 1
  },
  {
    name: 'li',
    description: 'Ein einzelner Listenpunkt',
    category: 'layout',
    emoji: '•',
    example: '<li>Das ist ein Listenpunkt</li>',
    tags: ['Listenpunkt', 'List Item', 'Punkt'],
    difficulty: 1
  },

  // Links
  {
    name: 'a',
    description: 'Ein Link zu einer anderen Webseite oder Stelle',
    category: 'text',
    emoji: '🔗',
    example: '<a href="https://www.example.com">Klick mich!</a>',
    tags: ['Link', 'Verweis', 'Anker'],
    difficulty: 2,
    attributes: [
      { name: 'href', description: 'Die Ziel-URL des Links' },
      { name: 'target', description: 'Wo der Link geöffnet werden soll' }
    ],
    tips: [
      'href ist das wichtigste Attribut',
      'Verwende aussagekräftigen Linktext'
    ]
  },

  // Bilder & Medien
  {
    name: 'img',
    description: 'Zeigt ein Bild auf der Webseite an',
    category: 'media',
    emoji: '🖼️',
    example: '<img src="bild.jpg" alt="Beschreibung des Bildes">',
    tags: ['Bild', 'Image', 'Foto'],
    difficulty: 2,
    attributes: [
      { name: 'src', description: 'Der Pfad zum Bild' },
      { name: 'alt', description: 'Alternative Beschreibung für das Bild' }
    ],
    tips: [
      'alt ist wichtig für Barrierefreiheit',
      'Verwende passende Bildformate (JPG, PNG, WebP)'
    ]
  },
  {
    name: 'video',
    description: 'Zeigt ein Video auf der Webseite an',
    category: 'media',
    emoji: '🎥',
    example: '<video controls><source src="video.mp4" type="video/mp4"></video>',
    tags: ['Video', 'Film', 'Bewegtbild'],
    difficulty: 3,
    attributes: [
      { name: 'controls', description: 'Zeigt Steuerelemente an' },
      { name: 'width', description: 'Breite des Videos' },
      { name: 'height', description: 'Höhe des Videos' }
    ],
    new: true
  },
  {
    name: 'audio',
    description: 'Spielt Audio ab',
    category: 'media',
    emoji: '🎵',
    example: '<audio controls><source src="musik.mp3" type="audio/mpeg"></audio>',
    tags: ['Audio', 'Musik', 'Ton'],
    difficulty: 3,
    new: true
  },

  // Tabellen
  {
    name: 'table',
    description: 'Erstellt eine Tabelle mit Zeilen und Spalten',
    category: 'layout',
    emoji: '📊',
    example: '<table><tr><td>Zelle 1</td><td>Zelle 2</td></tr></table>',
    tags: ['Tabelle', 'Table', 'Daten'],
    difficulty: 3,
    tips: [
      'Verwende table nur für echte Tabellendaten',
      'Für Layout ist div besser geeignet'
    ]
  },
  {
    name: 'tr',
    description: 'Eine Tabellenzeile',
    category: 'layout',
    emoji: '➖',
    example: '<tr><td>Zeile 1</td><td>Zeile 1</td></tr>',
    tags: ['Tabellenzeile', 'Table Row', 'Zeile'],
    difficulty: 3
  },
  {
    name: 'td',
    description: 'Eine Tabellenzelle',
    category: 'layout',
    emoji: '⬜',
    example: '<td>Inhalt der Zelle</td>',
    tags: ['Tabellenzelle', 'Table Data', 'Zelle'],
    difficulty: 3
  },
  {
    name: 'th',
    description: 'Eine Tabellenkopfzelle',
    category: 'layout',
    emoji: '📋',
    example: '<th>Überschrift der Spalte</th>',
    tags: ['Tabellenkopf', 'Table Header', 'Überschrift'],
    difficulty: 3
  },

  // Formulare
  {
    name: 'form',
    description: 'Ein Formular zum Sammeln von Daten',
    category: 'form',
    emoji: '📝',
    example: '<form action="/submit" method="post"><input type="text" name="username"></form>',
    tags: ['Formular', 'Form', 'Eingabe'],
    difficulty: 3,
    attributes: [
      { name: 'action', description: 'Wohin die Daten gesendet werden' },
      { name: 'method', description: 'HTTP-Methode (GET oder POST)' }
    ]
  },
  {
    name: 'input',
    description: 'Ein Eingabefeld für verschiedene Arten von Daten',
    category: 'form',
    emoji: '⌨️',
    example: '<input type="text" placeholder="Dein Name">',
    tags: ['Eingabe', 'Input', 'Feld'],
    difficulty: 2,
    attributes: [
      { name: 'type', description: 'Art der Eingabe (text, email, password, etc.)' },
      { name: 'placeholder', description: 'Hilfetext im leeren Feld' },
      { name: 'name', description: 'Name des Feldes für das Formular' }
    ],
    tips: [
      'type bestimmt, was eingegeben werden kann',
      'placeholder gibt dem Benutzer Hinweise'
    ]
  },
  {
    name: 'button',
    description: 'Ein klickbarer Button',
    category: 'form',
    emoji: '🔘',
    example: '<button type="submit">Absenden</button>',
    tags: ['Button', 'Schaltfläche', 'Klick'],
    difficulty: 2,
    attributes: [
      { name: 'type', description: 'Art des Buttons (submit, button, reset)' }
    ]
  },
  {
    name: 'textarea',
    description: 'Ein mehrzeiliges Eingabefeld für längeren Text',
    category: 'form',
    emoji: '📄',
    example: '<textarea placeholder="Deine Nachricht"></textarea>',
    tags: ['Textbereich', 'Langer Text', 'Nachricht'],
    difficulty: 2,
    attributes: [
      { name: 'rows', description: 'Anzahl der sichtbaren Zeilen' },
      { name: 'cols', description: 'Anzahl der sichtbaren Spalten' }
    ]
  },
  {
    name: 'select',
    description: 'Ein Dropdown-Menü mit Auswahlmöglichkeiten',
    category: 'form',
    emoji: '📋',
    example: '<select><option>Option 1</option><option>Option 2</option></select>',
    tags: ['Auswahl', 'Dropdown', 'Optionen'],
    difficulty: 3
  },
  {
    name: 'option',
    description: 'Eine Auswahlmöglichkeit in einem select-Element',
    category: 'form',
    emoji: '☑️',
    example: '<option value="deutsch">Deutsch</option>',
    tags: ['Option', 'Auswahl', 'Wert'],
    difficulty: 3
  },
  {
    name: 'label',
    description: 'Beschriftung für ein Formularfeld',
    category: 'form',
    emoji: '🏷️',
    example: '<label for="username">Benutzername:</label><input id="username" type="text">',
    tags: ['Beschriftung', 'Label', 'Text'],
    difficulty: 2,
    attributes: [
      { name: 'for', description: 'Verbindet das Label mit dem Eingabefeld' }
    ]
  },

  // Semantische Elemente
  {
    name: 'nav',
    description: 'Navigation der Webseite',
    category: 'semantic',
    emoji: '🧭',
    example: '<nav><a href="/">Start</a><a href="/about">Über uns</a></nav>',
    tags: ['Navigation', 'Menü', 'Links'],
    difficulty: 2,
    new: true
  },
  {
    name: 'figure',
    description: 'Ein Bild mit Beschriftung',
    category: 'semantic',
    emoji: '🖼️',
    example: '<figure><img src="bild.jpg" alt="Beschreibung"><figcaption>Bildunterschrift</figcaption></figure>',
    tags: ['Bild', 'Beschriftung', 'Figure'],
    difficulty: 3,
    new: true
  },
  {
    name: 'figcaption',
    description: 'Beschriftung für ein figure-Element',
    category: 'semantic',
    emoji: '📝',
    example: '<figcaption>Das ist eine Bildunterschrift</figcaption>',
    tags: ['Beschriftung', 'Caption', 'Text'],
    difficulty: 3,
    new: true
  },
  {
    name: 'blockquote',
    description: 'Ein längerer Zitat oder Abschnitt',
    category: 'semantic',
    emoji: '💬',
    example: '<blockquote>Das ist ein wichtiges Zitat von jemandem.</blockquote>',
    tags: ['Zitat', 'Quote', 'Betonung'],
    difficulty: 2
  },
  {
    name: 'cite',
    description: 'Quellenangabe für ein Zitat',
    category: 'semantic',
    emoji: '📚',
    example: '<blockquote>Zitat hier</blockquote><cite>- Autor des Zitats</cite>',
    tags: ['Quelle', 'Autor', 'Verweis'],
    difficulty: 3
  },
  {
    name: 'code',
    description: 'Zeigt Computer-Code an',
    category: 'semantic',
    emoji: '💻',
    example: '<p>Verwende <code>&lt;h1&gt;</code> für Überschriften.</p>',
    tags: ['Code', 'Programmierung', 'Technisch'],
    difficulty: 2
  },
  {
    name: 'pre',
    description: 'Vorformatierter Text, der exakt so angezeigt wird',
    category: 'semantic',
    emoji: '📄',
    example: '<pre>function hello() {\n  console.log("Hallo!");\n}</pre>',
    tags: ['Vorformatiert', 'Code', 'Beibehaltung'],
    difficulty: 2
  },
  {
    name: 'mark',
    description: 'Markiert Text als wichtig oder relevant',
    category: 'semantic',
    emoji: '🟡',
    example: '<p>Das ist <mark>wichtiger</mark> Text.</p>',
    tags: ['Markierung', 'Hervorhebung', 'Relevant'],
    difficulty: 2,
    new: true
  },
  {
    name: 'time',
    description: 'Zeigt Datum oder Uhrzeit an',
    category: 'semantic',
    emoji: '🕐',
    example: '<time datetime="2024-01-15">15. Januar 2024</time>',
    tags: ['Zeit', 'Datum', 'Uhrzeit'],
    difficulty: 3,
    new: true,
    attributes: [
      { name: 'datetime', description: 'Maschinenlesbares Datum/Uhrzeit' }
    ]
  },
  {
    name: 'address',
    description: 'Kontaktinformationen für den Autor oder Besitzer',
    category: 'semantic',
    emoji: '📍',
    example: '<address>Max Mustermann<br>Musterstraße 123<br>12345 Musterstadt</address>',
    tags: ['Adresse', 'Kontakt', 'Informationen'],
    difficulty: 3,
    new: true
  },

  // Weitere wichtige Elemente
  {
    name: 'html',
    description: 'Das Wurzelelement jeder HTML-Seite',
    category: 'semantic',
    emoji: '🌐',
    example: '<!DOCTYPE html><html><head>...</head><body>...</body></html>',
    tags: ['Wurzel', 'HTML', 'Dokument'],
    difficulty: 1,
    tips: [
      'Jede HTML-Seite beginnt mit html',
      'Enthält head und body'
    ]
  },
  {
    name: 'head',
    description: 'Enthält Metadaten über die Seite',
    category: 'semantic',
    emoji: '📋',
    example: '<head><title>Meine Seite</title><meta charset="utf-8"></head>',
    tags: ['Kopf', 'Metadaten', 'Informationen'],
    difficulty: 2
  },
  {
    name: 'body',
    description: 'Enthält den sichtbaren Inhalt der Seite',
    category: 'semantic',
    emoji: '👤',
    example: '<body><h1>Willkommen</h1><p>Das ist der Inhalt.</p></body>',
    tags: ['Körper', 'Inhalt', 'Sichtbar'],
    difficulty: 1
  },
  {
    name: 'title',
    description: 'Der Titel der Webseite (erscheint im Browser-Tab)',
    category: 'semantic',
    emoji: '🏷️',
    example: '<title>Meine erste Webseite</title>',
    tags: ['Titel', 'Browser', 'Tab'],
    difficulty: 1
  },
  {
    name: 'meta',
    description: 'Metadaten über die Seite (Zeichensatz, Beschreibung, etc.)',
    category: 'semantic',
    emoji: 'ℹ️',
    example: '<meta charset="utf-8"><meta name="description" content="Beschreibung">',
    tags: ['Metadaten', 'Informationen', 'Beschreibung'],
    difficulty: 3,
    attributes: [
      { name: 'charset', description: 'Zeichensatz der Seite' },
      { name: 'name', description: 'Name der Metadaten' },
      { name: 'content', description: 'Inhalt der Metadaten' }
    ]
  },
  {
    name: 'link',
    description: 'Verbindet die Seite mit externen Ressourcen (CSS, Icons)',
    category: 'semantic',
    emoji: '🔗',
    example: '<link rel="stylesheet" href="style.css">',
    tags: ['Verbindung', 'Ressourcen', 'Extern'],
    difficulty: 3,
    attributes: [
      { name: 'rel', description: 'Art der Verbindung' },
      { name: 'href', description: 'Pfad zur Ressource' }
    ]
  },
  {
    name: 'script',
    description: 'Fügt JavaScript-Code zur Seite hinzu',
    category: 'semantic',
    emoji: '⚡',
    example: '<script>console.log("Hallo Welt!");</script>',
    tags: ['JavaScript', 'Code', 'Funktionalität'],
    difficulty: 3,
    attributes: [
      { name: 'src', description: 'Pfad zur JavaScript-Datei' }
    ]
  }
];
