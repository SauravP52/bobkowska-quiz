import React from 'react';
import { JOURNAL_ENTRIES } from '../journalEntries';

export function Journal() {
  return (
    <main className="container">
      <div className="card journal-card">
        <h1>Our Journal 💝</h1>
        
        <div className="journal-entries">
          {JOURNAL_ENTRIES.map((entry, index) => {
            const date = new Date(entry.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            
            return (
              <div key={index} className="journal-entry">
                <div className="entry-date">{formattedDate}</div>
                <div className="entry-content">{entry.content}</div>
                {entry.image && (
                  <div className="entry-image-container">
                    <img 
                      src={entry.image.url} 
                      alt={entry.image.caption || 'Journal memory'} 
                      className="entry-image"
                    />
                    {entry.image.caption && (
                      <div className="entry-image-caption">{entry.image.caption}</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
