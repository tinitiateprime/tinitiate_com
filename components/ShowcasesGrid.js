'use client';
import SearchFilter from './SearchFilter';
import ShowcaseCard from './ShowcaseCard';

export default function ShowcasesGrid({ items }) {
  return (
    <SearchFilter items={items} placeholder="Search showcases…">
      {(results) => (
        <div className="showcase-grid">
          {results.map((s) => (
            <ShowcaseCard key={s.slug} {...s} />
          ))}
        </div>
      )}
    </SearchFilter>
  );
}
