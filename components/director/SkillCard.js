'use client';
import { useState } from 'react';

// Shared expandable skill card used on the Enterprise Services and Small
// Business Services director pages. On desktop (>720px) director.css
// forces the detail panel open via `grid-template-rows:1fr!important` and
// hides the chevron, so this toggle only visibly matters on mobile.
export default function SkillCard({ platform, defaultOpen, watermark, icon, title, description, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const detailId = `detail-${platform}`;

  return (
    <article className={`skill-card${open ? ' is-open' : ''}`} data-platform={platform}>
      {watermark}
      <button
        className="skill-head"
        aria-expanded={open}
        aria-controls={detailId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="skill-icon" aria-hidden="true">{icon}</span>
        <span className="skill-head-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
        <svg className="chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="skill-detail" id={detailId}>
        <div className="skill-detail-inner">
          <div className="skill-groups">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
