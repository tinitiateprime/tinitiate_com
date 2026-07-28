import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About - Tinitiate',
  description: 'About Tinitiate Technologies Pvt Ltd, an IT consulting and development company delivering Enterprise Services and Solo Entrepreneur & Small Business Services across cloud, data, AI automation, and custom development.',
  openGraph: {
    title: 'About - Tinitiate',
    description: 'Tinitiate Technologies Pvt Ltd: Enterprise Services and Solo Entrepreneur & Small Business Services for cloud, data, and AI automation initiatives.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function AboutPage() {
  return (
    <>
      <Header current="about" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow">About</p>
          <h1>Technology consulting built for <em>real execution</em>.</h1>
          <p className="lede">Tinitiate Technologies Pvt Ltd runs on two tracks: Enterprise Services for cloud, data, and AI at scale, and Solo Entrepreneur &amp; Small Business Services for workflows, AI workers, and growth systems.</p>
        </section>
        <section className="content wrap" style={{ padding: '24px 0 76px' }}>
          <div className="card intro">
            <p>TINITIATE is an IT consulting and development company focused on practical, business-ready technology solutions. We combine senior architecture thinking with hands-on engineering delivery, helping teams move from strategy to implementation with clarity, discipline, and measurable value.</p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
            <div className="card"><h3>Enterprise Services</h3><p>Cloud migrations, multi-stack data engineering, and agentic AI/ML automation — built for governance and scale.</p></div>
            <div className="card"><h3>Solo Entrepreneur &amp; Small Business Services</h3><p>Business process workflows, AI workers, planners, product &amp; order masters, sales management, and customer tools.</p></div>
          </div>
          <div className="values">
            <div className="card">
              <h3>How we work</h3>
              <ul className="value-list">
                <li>Business goals first, technology choices second.</li>
                <li>Architecture that is practical enough to build.</li>
                <li>Delivery plans with clear ownership and visibility.</li>
                <li>Support that continues after launch.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Where we help</h3>
              <ul className="value-list">
                <li>Data engineering and analytics foundations.</li>
                <li>On-prem to cloud modernization.</li>
                <li>AI automation and intelligent applications.</li>
                <li>CRM, marketing, and outreach operations.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
