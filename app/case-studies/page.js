import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
          <p className="lede">A selection of Enterprise Services and Solo Entrepreneur &amp; Small Business Services engagements. <em>(Placeholder content — replace with real projects, metrics, and links as they&apos;re published.)</em></p>
          <div className="filters" aria-label="Tracks">
            <span className="filter-tag enterprise">Enterprise Services</span>
            <span className="filter-tag solo">Solo Entrepreneur</span>
          </div>
        </section>

        <section className="cases wrap" id="cases">
          <div className="case-grid">
            <article className="case">
              <span className="industry"><span className="track enterprise">Enterprise</span>Pharma · Data Engineering</span>
              <h4>Clinical data platform on the lakehouse</h4>
              <p>Migrated fragmented trial data into a governed lakehouse with automated ingestion and quality checks, giving analysts a single validated source.</p>
              <div className="case-meta">
                <div><span className="k">Timeline</span><span className="v">16 wks</span></div>
                <div><span className="k">Pipelines</span><span className="v">40+</span></div>
                <div><span className="k">Load time</span><span className="v">−70%</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry"><span className="track enterprise">Enterprise</span>Retail · Cloud Migration</span>
              <h4>On-prem warehouse to cloud, zero downtime</h4>
              <p>Replatformed a legacy on-prem data warehouse to the cloud with phased cutover, parallel validation, and no interruption to daily reporting.</p>
              <div className="case-meta">
                <div><span className="k">Workloads</span><span className="v">120</span></div>
                <div><span className="k">Downtime</span><span className="v">0 hrs</span></div>
                <div><span className="k">Infra cost</span><span className="v">−35%</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry"><span className="track solo">Solo Entrepreneur</span>Startup · AI Automation</span>
              <h4>Business process design with AI built in</h4>
              <p>Designed the operating workflows for a growing startup — roles, reporting, and feedback loops — with AI agents handling intake, triage, and follow-ups.</p>
              <div className="case-meta">
                <div><span className="k">Processes</span><span className="v">8</span></div>
                <div><span className="k">Manual work</span><span className="v">−60%</span></div>
                <div><span className="k">Go-live</span><span className="v">6 wks</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry"><span className="track solo">Solo Entrepreneur</span>Services · Customer Outreach</span>
              <h4>WhatsApp + LinkedIn outreach console</h4>
              <p>Replaced spreadsheet-based follow-up with a segmented outreach console spanning WhatsApp, LinkedIn, and email — with response tracking by owner.</p>
              <div className="case-meta">
                <div><span className="k">Channels</span><span className="v">3</span></div>
                <div><span className="k">Response rate</span><span className="v">+2.1x</span></div>
                <div><span className="k">Go-live</span><span className="v">5 wks</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry"><span className="track solo">Solo Entrepreneur</span>E-commerce · Performance Marketing</span>
              <h4>Campaign reporting tied to real conversions</h4>
              <p>Connected ad spend, landing pages, and CRM data into one funnel view, replacing disconnected platform dashboards with a single source of truth.</p>
              <div className="case-meta">
                <div><span className="k">Channels tracked</span><span className="v">6</span></div>
                <div><span className="k">CAC</span><span className="v">−22%</span></div>
                <div><span className="k">Reporting</span><span className="v">Daily</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry"><span className="track enterprise">Enterprise</span>Manufacturing · Cost Optimization</span>
              <h4>Cutting delivery cost without cutting scope</h4>
              <p>Reviewed an in-flight cloud modernization plan and re-sequenced delivery phases to protect the highest-value features under a tighter budget.</p>
              <div className="case-meta">
                <div><span className="k">Budget saved</span><span className="v">−28%</span></div>
                <div><span className="k">Scope kept</span><span className="v">100%</span></div>
                <div><span className="k">Review time</span><span className="v">3 wks</span></div>
              </div>
              <a className="readmore" href="#">Read the full case →</a>
            </article>
          </div>
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
