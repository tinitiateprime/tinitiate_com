'use client';
import { useMemo, useState } from 'react';

export default function SearchFilter({ items, placeholder, children }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const haystack = [item.title, item.summary || item.description, ...(item.tags || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query]);

  return (
    <>
      <div className="search-bar">
        <span className="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="search"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="search-empty">No results for &quot;{query}&quot;.</p>
      ) : (
        children(filtered)
      )}
    </>
  );
}
