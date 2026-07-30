import Link from 'next/link';

export default function ShowcaseCard({ title, summary, tags, href }) {
  return (
    <article className="showcase-card">
      <h4><Link href={href}>{title}</Link></h4>
      <p>{summary}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <Link href={href} className="readmore">View showcase →</Link>
    </article>
  );
}
