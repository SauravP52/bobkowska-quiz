import React, { useEffect, useState } from 'react';
import { FACTS, FactItem } from '../facts';

async function fetchWikipediaImage(topic: string, minWidth = 600): Promise<string | null> {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = await res.json();
  const src = json?.originalimage?.source || json?.thumbnail?.source;
  if (!src) return null;
  return src;
}

function unsplashFeatured(topic: string, w = 800, h = 600): string {
  return `https://source.unsplash.com/featured/${w}x${h}/?${encodeURIComponent(topic)}`;
}

function picsum(topic: string, w = 800, h = 600): string {
  return `https://picsum.photos/seed/${encodeURIComponent(topic)}/${w}/${h}`;
}

async function resolveImage(item: FactItem): Promise<string> {
  // 1) Try Wikipedia
  try {
    const wiki = await fetchWikipediaImage(item.topic);
    if (wiki) return wiki;
  } catch {}
  // 2) Fallback: Unsplash Featured
  if (item.topic) return unsplashFeatured(item.topic);
  // 3) Last-resort placeholder
  return picsum(item.topic || 'fact');
}

function getFactOfTheDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return FACTS[dayOfYear % FACTS.length];
}

export function RandomFactPage() {
  const [image, setImage] = useState<string | null>(null);
  // Shuffle facts once on mount
  const [shuffledFacts] = useState(() => {
    const arr = [...FACTS];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });
  const [factIndex, setFactIndex] = useState(0);
  const factItem = shuffledFacts[factIndex % shuffledFacts.length];

  useEffect(() => {
    let mounted = true;
    resolveImage(factItem).then(img => {
      if (mounted) setImage(img);
    });
    return () => { mounted = false; };
  }, [factItem]);

  function handleNext() {
    setFactIndex((i: number) => (i + 1) % shuffledFacts.length);
  }

  return (
    <main className="container">
      <div className="card" style={{ textAlign: 'center', padding: '32px' }}>
        <h1 style={{ color: '#7c3aed', fontFamily: 'Caveat, cursive', fontSize: '2em' }}>
          Fact of the Day
        </h1>
        {image && (
          <img src={image} alt={factItem.topic || 'Fact'} style={{ maxWidth: '320px', borderRadius: '16px', margin: '24px auto', boxShadow: '0 2px 12px #a78bfa55' }} />
        )}
        <p style={{ fontSize: '1.3em', color: '#5b21b6', marginTop: '24px' }}>
          {factItem.fact}
        </p>
        <button onClick={handleNext} className="btn primary" style={{ marginTop: '24px' }}>Next Fact</button>
      </div>
    </main>
  );
}
