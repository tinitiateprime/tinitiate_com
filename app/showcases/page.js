import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShowcasesGrid from '../../components/ShowcasesGrid';
import { showcases } from '../../lib/showcases';

export const metadata = {
  title: 'Showcases - Tinitiate',
  description: 'A library of interactive architecture and pipeline diagrams from Tinitiate — click-to-inspect showcases of real cloud, data engineering, and AI systems.',
  openGraph: {
    title: 'Showcases - Tinitiate',
    description: 'Interactive, click-to-inspect architecture and pipeline diagrams from Tinitiate engagements.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function ShowcasesPage() {
  return (
    <>
      <Header current="showcases" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow">Showcases</p>
          <h1>Architecture, <em>visualized</em>.</h1>
          <p className="lede">A library of interactive pipeline and architecture diagrams — click any node to see what it does and how it connects, alongside a technical deep-dive on why the approach works.</p>
        </section>

        <section className="cases wrap" id="showcases">
          <ShowcasesGrid items={showcases} />
        </section>
      </main>
      <Footer />
    </>
  );
}
