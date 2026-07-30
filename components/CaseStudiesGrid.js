'use client';
import SearchFilter from './SearchFilter';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesGrid({ items }) {
  return (
    <SearchFilter items={items} placeholder="Search case studies…">
      {(results) => (
        <div className="case-grid">
          {results.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
        </div>
      )}
    </SearchFilter>
  );
}
