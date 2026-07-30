import Link from 'next/link';

export default function CaseStudyCard({ track, industry, title, summary, meta, href }) {
  return (
    <article className="case">
      <span className="industry">
        <span className={`track ${track}`}>{track === 'enterprise' ? 'Enterprise' : 'Solo Entrepreneur'}</span>
        {industry}
      </span>
      <h4>{title}</h4>
      <p>{summary}</p>
      <div className="case-meta">
        {meta.map((m) => (
          <div key={m.k}>
            <span className="k">{m.k}</span>
            <span className="v">{m.v}</span>
          </div>
        ))}
      </div>
      <Link href={href} className="readmore">Read the full case →</Link>
    </article>
  );
}
