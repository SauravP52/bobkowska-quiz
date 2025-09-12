import React, { useState } from 'react';
import { TIMELINE_CATEGORIES } from '../timelineEntries';

export function Timeline() {
  // Sort categories by date descending
  const sortedCategories = [...TIMELINE_CATEGORIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Track which categories are expanded
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleCategory = (destination: string) => {
    setExpanded(prev => ({
      ...prev,
      [destination]: !prev[destination]
    }));
  };

  return (
    <main className="container">
      <div className="card timeline-card">
        <h1 style={{
          color: '#7c3aed',
          fontFamily: 'Caveat, cursive',
          fontSize: '2.2em',
          marginBottom: 24,
          textAlign: 'center'
        }}>
          Our Best Memories 💜
        </h1>
        {sortedCategories.map(category => (
          <div className="timeline-category" key={category.destination + category.date}>
            <button
              className="timeline-toggle"
              onClick={() => toggleCategory(category.destination)}
              style={{
                background: '#e0d6f6',
                border: '2px solid #a78bfa',
                borderRadius: '12px',
                color: '#5b21b6',
                fontFamily: 'Caveat, cursive',
                fontSize: '1.3em',
                padding: '10px 18px',
                margin: '16px 0',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                boxShadow: expanded[category.destination] ? '0 2px 12px rgba(124,58,237,0.12)' : 'none',
                transition: 'box-shadow 0.2s'
              }}
              aria-expanded={!!expanded[category.destination]}
            >
              {category.destination} <span style={{fontSize: '1em', color: '#7c3aed'}}>({new Date(category.date).toLocaleDateString()})</span>
              <span style={{float: 'right', fontSize: '1.2em'}}>
                {expanded[category.destination] ? '▲' : '▼'}
              </span>
            </button>
            {expanded[category.destination] && (
              <div>
                {category.entries.map((entry, idx) => (
                  <div className="journal-entry" key={idx}>
                    <div className="journal-content">{entry.content}</div>
                    {entry.image && (
                      <div className="entry-image-container">
                        <img
                          src={entry.image.url}
                          alt={entry.image.caption || category.destination}
                          className="entry-image"
                        />
                        {entry.image.caption && (
                          <div className="entry-image-caption">{entry.image.caption}</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}