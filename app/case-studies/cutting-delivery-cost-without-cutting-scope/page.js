import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { caseStudies } from '../../../lib/case-studies';

const cs = caseStudies.find((c) => c.slug === 'cutting-delivery-cost-without-cutting-scope');

export const metadata = {
  title: `${cs.title} — Case Study - Tinitiate`,
  description: cs.summary,
  openGraph: {
    title: `${cs.title} — Case Study - Tinitiate`,
    description: cs.summary,
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function CaseStudyPage() {
  return (
    <>
      <Header current="case-studies" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow"><span className={`cap-tag ${cs.track}`}>{cs.track === 'enterprise' ? 'Enterprise' : 'Solo Entrepreneur'}</span> {cs.industry}</p>
          <h1>{cs.title}</h1>
          <p className="lede">{cs.summary}</p>
          <div className="case-meta" style={{ marginTop: 30 }}>
            {cs.meta.map((m) => (
              <div key={m.k}><span className="k">{m.k}</span><span className="v">{m.v}</span></div>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ padding: '8px 0 76px' }}>
          <div className="card intro">
            <p>Full write-up coming soon — check back or <Link href="/request-callback">get in touch to discuss a similar engagement</Link>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
