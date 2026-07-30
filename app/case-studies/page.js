import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CaseStudiesGrid from '../../components/CaseStudiesGrid';
import { caseStudies } from '../../lib/case-studies';

export const metadata = {
  title: 'Case Studies - Tinitiate',
  description: 'Case studies from Tinitiate Technologies across Enterprise Services (cloud, data engineering, AI automation) and Solo Entrepreneur & Small Business Services (workflows, outreach, and marketing systems).',
  openGraph: {
    title: 'Case Studies - Tinitiate',
    description: 'A selection of Tinitiate engagements across industries — Enterprise Services and Solo Entrepreneur & Small Business Services.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header current="case-studies" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow">Case Studies</p>
          <h1>Engagements <em>across industries</em>.</h1>
          <p className="lede">A selection of Enterprise Services and Solo Entrepreneur &amp; Small Business Services engagements.</p>
          <div className="filters" aria-label="Tracks">
            <span className="filter-tag enterprise">Enterprise Services</span>
            <span className="filter-tag solo">Solo Entrepreneur</span>
          </div>
        </section>

        <section className="cases wrap" id="cases">
          <CaseStudiesGrid items={caseStudies} />
        </section>

        <section className="cta wrap" id="contact">
          <div className="cta-box">
            <div>
              <h2>Want to see how this applies to your systems?</h2>
              <p>Tell us your industry and goal — we&apos;ll point to the closest relevant engagement.</p>
            </div>
            <a className="btn" href="/request-callback">Talk to us<span className="btn-arrow"></span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
