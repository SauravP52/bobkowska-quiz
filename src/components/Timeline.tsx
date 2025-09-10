import React from 'react';
import { TIMELINE_CATEGORIES } from '../timelineEntries';

export function Timeline() {
  // Sort categories by date descending
  const sortedCategories = [...TIMELINE_CATEGORIES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
            <h2 style={{
              color: '#5b21b6',
              fontFamily: 'Caveat, cursive',
              fontSize: '1.5em',
              margin: '24px 0 8px 0'
            }}>
              {category.destination} <span style={{fontSize: '1em', color: '#7c3aed'}}>({new Date(category.date).toLocaleDateString()})</span>
            </h2>
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
        ))}
      </div>
    </main>
  );
}