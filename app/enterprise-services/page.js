import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Enterprise Services — Cloud, Data Engineering & Agentic AI - Tinitiate',
  description: 'Tinitiate Enterprise Services: cloud migrations (code refactoring and data), multi-stack data engineering across AWS, Azure, Snowflake, Databricks and dbt, and agentic AI/ML automation.',
  openGraph: {
    title: 'Enterprise Services — Cloud, Data Engineering & Agentic AI - Tinitiate',
    description: 'Cloud migrations, batch/CDC/real-time data engineering across a multi-tech stack, and agentic AI/ML automation — built for enterprise scale and governance.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const Tick = () => (
  <span className="tick"><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg></span>
);

export default function EnterpriseServicesPage() {
  return (
    <>
      <Header current="enterprise" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow"><span className="cap-tag enterprise">Track 01</span> Cloud, Data &amp; Agentic AI for Enterprise Teams</p>
          <h1>Modernize the stack. <em>Scale the intelligence.</em></h1>
          <p className="lede">Tinitiate partners with enterprise data and platform teams on cloud migrations, multi-tech-stack data engineering, and agentic AI/ML automation — built for governance, scale, and multi-region delivery, not a proof-of-concept.</p>
          <div className="chips" aria-label="Who this is for">
            <span className="chip">Enterprise IT</span>
            <span className="chip">Data platform teams</span>
            <span className="chip">Regulated industries</span>
            <span className="chip">Multi-region delivery</span>
            <span className="chip">Governance-first</span>
          </div>

          <nav className="process" aria-label="How we engage">
            <div className="process-head">How an enterprise engagement runs</div>
            <div className="process-grid">
              <div className="step"><span className="n">01</span><h4>Assess</h4><p>Audit the current architecture, workloads, and stack — surfacing risk and dependencies before proposing a plan.</p></div>
              <div className="step"><span className="n">02</span><h4>Design</h4><p>Right-size a target architecture across cloud, data, and AI that fits existing governance and compliance requirements.</p></div>
              <div className="step"><span className="n">03</span><h4>Migrate &amp; build</h4><p>Execute in phases with parallel validation, so production keeps running while the new platform comes online.</p></div>
              <div className="step"><span className="n">04</span><h4>Operate</h4><p>Hand off with runbooks, observability, and trained teams — or stay on to run it with you.</p></div>
            </div>
          </nav>
        </section>

        <section className="services wrap track-blue" id="services">
          <h2 className="section-title">What we cover</h2>
          <p className="section-sub">Three ways we plug into an enterprise stack — sized for governed, multi-team, multi-region delivery.</p>

          <div className="svc-rows">
            <div className="svc-row" id="ent-cloud">
              <div>
                <p className="svc-eyebrow">01 / Cloud Migrations</p>
                <h3>Cloud migrations without the rewrite risk</h3>
                <p className="svc-desc">Code refactoring and data migration handled as one coordinated program — not two disconnected workstreams that fall out of sync mid-project.</p>
                <a className="btn" href="/request-callback?service=cloud-migrations">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Code Refactoring</div>
                <div className="check-item"><Tick />Data Migration</div>
                <div className="check-item"><Tick />Phased Cutover</div>
                <div className="check-item"><Tick />Zero-Downtime Rollout</div>
                <div className="check-item"><Tick />Compliance-Ready</div>
                <div className="check-item"><Tick />Multi-Cloud (AWS/Azure)</div>
              </div>
            </div>

            <div className="svc-row" id="ent-data">
              <div>
                <p className="svc-eyebrow">02 / Data Engineering</p>
                <h3>Batch, CDC, and real-time — one platform</h3>
                <p className="svc-desc">Pipelines across a multi-tech stack — AWS, Azure, Snowflake, Databricks, and dbt — so batch, change-data-capture, and streaming workloads share one governed foundation.</p>
                <a className="btn" href="/request-callback?service=data-engineering">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Batch Pipelines</div>
                <div className="check-item"><Tick />CDC Replication</div>
                <div className="check-item"><Tick />Real-Time Streaming</div>
                <div className="check-item"><Tick />AWS · Azure · Snowflake</div>
                <div className="check-item"><Tick />Databricks + dbt</div>
                <div className="check-item"><Tick />Data Quality &amp; Governance</div>
              </div>
            </div>

            <div className="svc-row" id="ent-ai">
              <div>
                <p className="svc-eyebrow">03 / AI &amp; ML</p>
                <h3>Agentic AI that plugs into how you already run ML</h3>
                <p className="svc-desc">Agentic automation and ML pipelines with guardrails, auditability, and human-in-the-loop controls — built to sit inside existing MLOps and security requirements.</p>
                <a className="btn" href="/request-callback?service=ai-automation">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Agentic Workflows</div>
                <div className="check-item"><Tick />MLOps Integration</div>
                <div className="check-item"><Tick />Human-in-the-Loop</div>
                <div className="check-item"><Tick />Guardrails &amp; Auditability</div>
                <div className="check-item"><Tick />Multi-Model Orchestration</div>
                <div className="check-item"><Tick />Enterprise-Grade Security</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta wrap" id="contact">
          <div className="cta-box">
            <div>
              <h2>Have a platform to modernize at enterprise scale?</h2>
              <p>Tell us the current state and the target — we&apos;ll bring a plan that fits your governance and delivery model.</p>
            </div>
            <a className="btn" href="/request-callback?service=enterprise-services">Book a free call<span className="btn-arrow"></span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
