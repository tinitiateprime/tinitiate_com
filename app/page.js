import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroNetwork from '../components/HeroNetwork';

export const metadata = {
  title: 'Tinitiate — Consulting, Execution & CRM',
  description: 'Consulting and technical execution from Tinitiate — data engineering, cloud migration, AI automation, business process design, and custom CRM tooling.',
  openGraph: {
    title: 'Tinitiate — Consulting, Execution & CRM',
    description: 'We plan the architecture, then we build it — consulting, project execution, and CRM & marketing systems from Tinitiate Technologies.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const showcaseItems = [
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="36" y="64" width="150" height="72" rx="16" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<path d="M46 130 L46 148 L64 130 Z" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<line x1="56" y1="86" x2="166" y2="86" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<line x1="56" y1="102" x2="150" y2="102" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<line x1="56" y1="118" x2="130" y2="118" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<circle cx="176" cy="66" r="13" fill="var(--teal)"/>
<path d="M170 66 L175 71 L184 60" fill="none" stroke="var(--bg)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M198 100 C 240 100, 260 100, 290 100" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="3 5"/>
<circle cx="308" cy="72" r="14" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/><circle cx="308" cy="72" r="4" fill="var(--teal)"/>
<circle cx="330" cy="112" r="14" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/><circle cx="330" cy="112" r="4" fill="var(--teal)"/>
<circle cx="304" cy="152" r="14" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/><circle cx="304" cy="152" r="4" fill="var(--teal)"/></svg>`,
    title: 'WhatsApp campaign engine',
    desc: 'Custom CRM tool for segmented WhatsApp outreach with templates, scheduling, and reply tracking.',
    tags: ['CRM', 'WhatsApp', 'Automation'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="40" y="60" width="92" height="112" rx="6" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<path d="M112 60 L132 60 L132 80 Z" fill="var(--border)" opacity=".6"/>
<line x1="52" y1="82" x2="120" y2="82" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<line x1="52" y1="98" x2="120" y2="98" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<line x1="52" y1="114" x2="104" y2="114" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<line x1="52" y1="130" x2="112" y2="130" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<circle cx="176" cy="118" r="28" fill="none" stroke="var(--blue)" stroke-width="5"/>
<line x1="196" y1="138" x2="216" y2="158" stroke="var(--blue)" stroke-width="6" stroke-linecap="round"/>
<path d="M176 106 L180 116 L190 118 L180 120 L176 130 L172 120 L162 118 L172 116 Z" fill="var(--blue)"/>
<rect x="248" y="72" width="120" height="66" rx="10" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<path d="M264 138 L256 152 L272 140 Z" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<line x1="262" y1="92" x2="352" y2="92" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<line x1="262" y1="106" x2="340" y2="106" stroke="var(--text-dim)" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<line x1="262" y1="120" x2="310" y2="120" stroke="var(--blue)" stroke-width="4" stroke-linecap="round"/></svg>`,
    title: 'Agentic RAG assistant',
    desc: 'Document-intelligence assistant answering from enterprise knowledge with citations and guardrails.',
    tags: ['AI', 'RAG', 'Web App'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><line x1="40" y1="102" x2="360" y2="102" stroke="var(--border)" stroke-width="2"/>
<circle cx="70" cy="102" r="13" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="2"/><circle cx="70" cy="102" r="4" fill="var(--teal)"/>
<circle cx="160" cy="102" r="13" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="2"/><circle cx="160" cy="102" r="4" fill="var(--teal)"/>
<circle cx="250" cy="102" r="13" fill="var(--panel-2)" stroke="var(--amber)" stroke-width="2"/><circle cx="250" cy="102" r="4" fill="var(--amber)"/>
<circle cx="340" cy="102" r="13" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="2"/><circle cx="340" cy="102" r="4" fill="var(--teal)"/>
<rect x="252" y="150" width="10" height="24" rx="2" fill="var(--text-dim)" opacity=".45"/>
<rect x="268" y="138" width="10" height="36" rx="2" fill="var(--text-dim)" opacity=".6"/>
<rect x="284" y="122" width="10" height="52" rx="2" fill="var(--amber)"/>
<rect x="300" y="146" width="10" height="28" rx="2" fill="var(--text-dim)" opacity=".5"/>
<path d="M50 170 L90 158 L130 166 L170 148" fill="none" stroke="var(--text-dim)" stroke-width="2.5" stroke-linecap="round" opacity=".6"/></svg>`,
    title: 'Pipeline observability dashboard',
    desc: 'Live view of orchestrated data pipelines — run health, freshness, and quality checks in one screen.',
    tags: ['Data Eng', 'Airflow', 'Dashboards'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="40" y="120" width="76" height="20" rx="4" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<rect x="40" y="96" width="76" height="20" rx="4" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<rect x="40" y="72" width="76" height="20" rx="4" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<circle cx="50" cy="82" r="2.5" fill="var(--text-dim)"/><circle cx="50" cy="106" r="2.5" fill="var(--text-dim)"/><circle cx="50" cy="130" r="2.5" fill="var(--text-dim)"/>
<path d="M126 102 L 200 102" stroke="var(--blue)" stroke-width="2" stroke-dasharray="4 4"/>
<path d="M196 96 L 208 102 L 196 108 Z" fill="var(--blue)"/>
<path d="M236 130 h64 a18 18 0 0 0 2-36 a24 24 0 0 0 -46-10 a20 20 0 0 0 -20 46 z" fill="none" stroke="var(--blue)" stroke-width="3" stroke-linejoin="round"/>
<path d="M244 150 l8 8 16 -16" fill="none" stroke="var(--teal)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M290 150 l8 8 16 -16" fill="none" stroke="var(--teal)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Migration assessment toolkit',
    desc: 'Automated workload discovery and cloud-readiness scoring used to plan on-prem to cloud moves.',
    tags: ['Cloud', 'Assessment', 'Tooling'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="150" y="70" width="100" height="66" rx="6" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<path d="M150 70 L200 108 L250 70" fill="none" stroke="var(--border)" stroke-width="1.5"/>
<path d="M 110 89 A 14 14 0 0 1 124 103" fill="none" stroke="var(--teal)" stroke-width="2"/>
<path d="M 110 77 A 26 26 0 0 1 136 103" fill="none" stroke="var(--teal)" stroke-width="2" opacity=".6"/>
<path d="M 110 65 A 38 38 0 0 1 148 103" fill="none" stroke="var(--teal)" stroke-width="2" opacity=".35"/>
<circle cx="320" cy="76" r="12" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="1.5"/><circle cx="320" cy="76" r="3.5" fill="var(--teal)"/>
<circle cx="340" cy="112" r="12" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="1.5"/><circle cx="340" cy="112" r="3.5" fill="var(--teal)"/>
<circle cx="316" cy="150" r="12" fill="var(--panel-2)" stroke="var(--teal)" stroke-width="1.5"/><circle cx="316" cy="150" r="3.5" fill="var(--teal)"/></svg>`,
    title: 'B2B B2C + email campaign console',
    desc: 'One console to run multi-channel campaigns with audience lists, sequencing, and response analytics.',
    tags: ['CRM', 'Campaigns', 'Analytics'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="40" y="60" width="200" height="112" rx="8" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<path d="M92 88 L70 116 L92 144" fill="none" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M188 88 L210 116 L188 144" fill="none" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="150" y1="82" x2="128" y2="150" stroke="var(--text-dim)" stroke-width="5" stroke-linecap="round"/>
<rect x="98" y="156" width="4" height="16" fill="var(--amber)"/>
<path d="M280 76 L310 90 L280 104 L250 90 Z" fill="var(--amber)"/>
<rect x="272" y="102" width="16" height="4" fill="var(--amber)"/>
<path d="M260 92 v14 a24 6 0 0 0 40 0 v-14" fill="none" stroke="var(--amber)" stroke-width="2"/></svg>`,
    title: 'Developer training lab',
    desc: 'Hands-on AI automation curriculum with labs, reference architectures, and graded projects.',
    tags: ['Training', 'AI Automation'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><rect x="36" y="64" width="86" height="112" rx="8" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<rect x="157" y="64" width="86" height="112" rx="8" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<rect x="278" y="64" width="86" height="112" rx="8" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
<rect x="48" y="78" width="62" height="26" rx="4" fill="var(--text-dim)" opacity=".35"/>
<rect x="48" y="112" width="62" height="26" rx="4" fill="var(--text-dim)" opacity=".22"/>
<rect x="169" y="78" width="62" height="26" rx="4" fill="none" stroke="var(--blue)" stroke-width="2"/>
<rect x="169" y="112" width="62" height="26" rx="4" fill="var(--text-dim)" opacity=".22"/>
<rect x="290" y="78" width="62" height="26" rx="4" fill="var(--text-dim)" opacity=".35"/>
<path d="M126 118 L152 118 M146 111 L153 118 L146 125" fill="none" stroke="var(--text-dim)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M247 118 L273 118 M267 111 L274 118 L267 125" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Custom sales app for your sales team',
    desc: 'A lightweight CRM and pipeline tracker built around how your team actually sells — leads, follow-ups, and deal stages in one app.',
    tags: ['Sales', 'CRM', 'Mobile'],
  },
  {
    thumb: `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><rect x="1" y="1" width="398" height="223" rx="10" fill="none" stroke="var(--border)" stroke-width="1.5"/><line x1="1" y1="34" x2="399" y2="34" stroke="var(--border)" stroke-width="1.5"/><circle cx="18" cy="17" r="3" fill="var(--border)"/><circle cx="30" cy="17" r="3" fill="var(--border)"/><circle cx="42" cy="17" r="3" fill="var(--border)"/><g stroke="var(--border)" stroke-width="1.5" fill="var(--panel-2)">
<ellipse cx="90" cy="70" rx="30" ry="9"/><path d="M60 70 v20 a30 9 0 0 0 60 0 v-20"/>
<ellipse cx="200" cy="70" rx="30" ry="9"/><path d="M170 70 v20 a30 9 0 0 0 60 0 v-20"/>
<ellipse cx="310" cy="70" rx="30" ry="9"/><path d="M280 70 v20 a30 9 0 0 0 60 0 v-20"/>
</g>
<path d="M90 100 L 180 150" stroke="var(--teal)" stroke-width="2" stroke-dasharray="3 5" fill="none"/>
<path d="M200 100 L 200 150" stroke="var(--teal)" stroke-width="2" stroke-dasharray="3 5" fill="none"/>
<path d="M310 100 L 220 150" stroke="var(--teal)" stroke-width="2" stroke-dasharray="3 5" fill="none"/>
<g stroke="var(--teal)" stroke-width="2" fill="var(--panel-2)">
<ellipse cx="200" cy="158" rx="42" ry="11"/><path d="M158 158 v18 a42 11 0 0 0 84 0 v-18"/>
</g></svg>`,
    title: 'Enterprise data engineering',
    desc: 'Large-scale ingestion and transformation pipelines built for enterprise data volumes, governance, and compliance requirements.',
    tags: ['Data Eng', 'Enterprise', 'Governance'],
  },
];

export default function HomePage() {
  return (
    <>
      <Header current="home" />
      <main id="top">
        {/* HERO */}
        <section className="hero wrap">
          <div className="hero-split">
            <div>
              <p className="eyebrow">Tinitiate · Two Tracks, Many Teams</p>
              <h1>Enterprise-grade delivery. <em>Small-business simplicity.</em></h1>
              <p className="lede">Tinitiate runs on two tracks: <b>Enterprise Services</b> — cloud migrations, multi-stack data engineering, and agentic AI/ML automation for larger teams — and <b>Solo Entrepreneur &amp; Small Business Services</b> — workflows, AI workers, planners, catalogs, sales, and customer tools sized for a team of one to ten.</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
                <a className="btn" href="/request-callback">Book a call<span className="btn-arrow"></span></a>
                <a className="btn btn-outline" href="#enterprise">Explore services →</a>
              </div>
              <p className="mono" style={{ marginTop: 38, fontSize: '.72rem', letterSpacing: '.08em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Irving, TX · Hyderabad, India · Remote delivery worldwide</p>
            </div>

            <div className="hero-network-wrap" aria-hidden="true">
              <HeroNetwork />
              <div className="hero-cards">
                <div className="hero-card" style={{ top: '6%', left: '4%', animationDelay: '.2s' }}><span className="ic">🏢</span><span className="tx"><span className="tag">01 / Track</span><span className="ti">Enterprise</span></span></div>
                <div className="hero-card hub" style={{ top: '36%', left: '38%', animationDelay: '0s' }}><span className="ic">✳</span><span className="tx"><span className="tag">Hub</span><span className="ti">Tinitiate</span></span></div>
                <div className="hero-card" style={{ top: '16%', right: '2%', animationDelay: '.6s' }}><span className="ic">🚀</span><span className="tx"><span className="tag">02 / Track</span><span className="ti">Solo Entrepreneur</span></span></div>
                <div className="hero-card" style={{ top: '58%', left: '2%', animationDelay: '.9s' }}><span className="ic">📣</span><span className="tx"><span className="tag">Focus</span><span className="ti">Business Growth</span></span></div>
                <div className="hero-card" style={{ top: '66%', right: '6%', animationDelay: '.4s' }}><span className="ic">☁</span><span className="tx"><span className="tag">Focus</span><span className="ti">Data &amp; Cloud</span></span></div>
                <div className="hero-card" style={{ top: '88%', left: '30%', animationDelay: '1.1s' }}><span className="ic">🤖</span><span className="tx"><span className="tag">Focus</span><span className="ti">AI Automation</span></span></div>
              </div>
            </div>
          </div>

          {/* SIGNATURE: the offering ledger */}
          <nav className="ledger" aria-label="All offerings">
            <div className="ledger-head">
              <span>Everything we offer</span>
              <span>9 services · 2 tracks</span>
            </div>
            <div className="ledger-grid cols-2">
              <div className="ledger-col">
                <h3>Enterprise Services</h3>
                <a href="/enterprise-services#ent-cloud">Cloud Migrations and Refactoring</a>
                <a href="/enterprise-services#ent-data">Data Engineering</a>
                <a href="/enterprise-services#ent-ai">AI Agentic ML Automation</a>
              </div>
              <div className="ledger-col">
                <h3>Solo Entrepreneur / Small Business</h3>
                <div className="ledger-links-2col">
                  <a href="/solo-entrepreneur-services#s-bpw">Business Process Workflows</a>
                  <a href="/solo-entrepreneur-services#s-ai">AI Workers for Digital Processing</a>
                  <a href="/solo-entrepreneur-services#s-plan">Planners, Checklists &amp; To-Dos</a>
                  <a href="/solo-entrepreneur-services#s-prod">Products &amp; Services</a>
                  <a href="/solo-entrepreneur-services#s-sales">Sales Management</a>
                  <a href="/solo-entrepreneur-services#s-cust">Customer Management</a>
                </div>
              </div>
            </div>
          </nav>
        </section>

        {/* WHAT WE DO */}
        <section className="wrap" style={{ padding: '24px 0 8px' }}>
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Two tracks, sized for who you are.</h2>
          <p className="section-sub">Enterprise teams get cloud, data, and AI at scale. Solo founders and small businesses get workflows, AI workers, and growth systems — under one accountable team either way.</p>
          <div className="tiles cols-2">
            <div className="card tile">
              <span className="ic">🏢</span>
              <h4>Enterprise Services</h4>
              <p>Cloud migrations, multi-stack data engineering (AWS, Azure, Snowflake, Databricks, dbt), and agentic AI/ML automation — built for scale and governance.</p>
            </div>
            <div className="card tile">
              <span className="ic">🚀</span>
              <h4>Solo Entrepreneur &amp; Small Business Services</h4>
              <p>Business process workflows, AI workers for digital processing, planners, product &amp; order masters, sales management, and customer tools.</p>
            </div>
          </div>
        </section>

        {/* ENTERPRISE SERVICES */}
        <section className="cap enterprise track-blue wrap" id="enterprise" style={{ paddingTop: 72 }}>
          <div className="cap-head">
            <a className="track-heading-link" href="/enterprise-services" aria-label="Open Enterprise Services page">
              <span className="cap-tag enterprise">Track 01</span>
              <h2 className="section-title">Enterprise Services</h2>
            </a>
          </div>
          <p className="section-sub">Cloud, data, and AI at enterprise scale — built for governance, multi-region delivery, and platform teams, not a proof-of-concept.</p>

          <div className="chips" aria-label="Enterprise services">
            <a className="chip" href="/enterprise-services#ent-cloud">Cloud Migrations</a>
            <a className="chip" href="/enterprise-services#ent-data">Data Engineering</a>
            <a className="chip" href="/enterprise-services#ent-ai">AI Agentic ML Automation</a>
          </div>
          <p className="highlight-line"><strong>Built for enterprise IT and data platform teams</strong> — multi-tech-stack delivery (AWS, Azure, Snowflake, Databricks, dbt) with governance built in.</p>
          <div className="track-cta">
            <a className="btn" href="/enterprise-services">See full Enterprise details<span className="btn-arrow"></span></a>
            <a className="btn btn-outline" href="/request-callback">Book a free call</a>
          </div>
        </section>

        {/* SOLO ENTREPRENEUR / SMALL BUSINESS */}
        <section className="cap solo track-teal wrap" id="solo" style={{ paddingTop: 72, borderTop: '1px solid var(--border)' }}>
          <div className="cap-head">
            <a className="track-heading-link" href="/solo-entrepreneur-services" aria-label="Open Solo Entrepreneur and Small Business Services page">
              <span className="cap-tag solo">Track 02</span>
              <h2 className="section-title">Solo Entrepreneur &amp; Small Business Services</h2>
            </a>
          </div>
          <p className="section-sub">Workflows, AI workers, planners, catalogs, sales, and customer tools sized for a solo founder or a small team — no enterprise contracts required.</p>

          <div className="chips" aria-label="Solo entrepreneur and small business services">
            <a className="chip" href="/solo-entrepreneur-services#s-bpw">Business Process Workflows</a>
            <a className="chip" href="/solo-entrepreneur-services#s-ai">AI Workers for Digital Processing</a>
            <a className="chip" href="/solo-entrepreneur-services#s-plan">Calenders, Planners, Checklists &amp; To-Dos</a>
            <a className="chip" href="/solo-entrepreneur-services#s-prod">Products &amp; Services</a>
            <a className="chip" href="/solo-entrepreneur-services#s-sales">Sales Management</a>
            <a className="chip" href="/solo-entrepreneur-services#s-cust">Customer Management</a>
          </div>
          <p className="highlight-line"><strong>Built for solopreneurs &amp; small companies</strong> — one connected system instead of five disconnected subscriptions.</p>
          <div className="track-cta">
            <a className="btn" href="/solo-entrepreneur-services">See full Solo Entrepreneur details<span className="btn-arrow"></span></a>
            <a className="btn btn-outline" href="/request-callback">Book a free call</a>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="cases wrap" id="cases" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="eyebrow">Proof</p>
          <h2 className="section-title">Case studies</h2>
          <p className="section-sub">A selection of engagements across industries. <em>(Placeholder content — replace with your real projects, metrics, and links.)</em></p>

          <div className="case-grid">
            <article className="case">
              <span className="industry">Pharma · Data Engineering</span>
              <h4>Clinical data platform on the lakehouse</h4>
              <p>Migrated fragmented trial data into a governed lakehouse with automated ingestion and quality checks, giving analysts a single validated source.</p>
              <div className="case-meta">
                <div><span className="k">Timeline</span><span className="v">16 wks</span></div>
                <div><span className="k">Pipelines</span><span className="v">40+</span></div>
                <div><span className="k">Load time</span><span className="v">−70%</span></div>
              </div>
              <a className="readmore" href="/case-studies">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry">Retail · Cloud Migration</span>
              <h4>On-prem warehouse to cloud, zero downtime</h4>
              <p>Replatformed a legacy on-prem data warehouse to the cloud with phased cutover, parallel validation, and no interruption to daily reporting.</p>
              <div className="case-meta">
                <div><span className="k">Workloads</span><span className="v">120</span></div>
                <div><span className="k">Downtime</span><span className="v">0 hrs</span></div>
                <div><span className="k">Infra cost</span><span className="v">−35%</span></div>
              </div>
              <a className="readmore" href="/case-studies">Read the full case →</a>
            </article>

            <article className="case">
              <span className="industry">Startup · AI Automation</span>
              <h4>Business process design with AI built in</h4>
              <p>Designed the operating workflows for a growing startup — roles, reporting, and feedback loops — with AI agents handling intake, triage, and follow-ups.</p>
              <div className="case-meta">
                <div><span className="k">Processes</span><span className="v">8</span></div>
                <div><span className="k">Manual work</span><span className="v">−60%</span></div>
                <div><span className="k">Go-live</span><span className="v">6 wks</span></div>
              </div>
              <a className="readmore" href="/case-studies">Read the full case →</a>
            </article>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="showcase wrap" id="showcase">
          <p className="eyebrow">Build log</p>
          <h2 className="section-title">Showcase</h2>
          <p className="section-sub">Tools, demos, and builds you can see. <em>(Placeholder content — swap in screenshots, demo links, and repos.)</em></p>

          <div className="show-grid">
            {showcaseItems.map((item, i) => (
              <article className="show" key={i}>
                <div className="thumb" dangerouslySetInnerHTML={{ __html: item.thumb }} />
                <div className="body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="tags">
                    {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <a className="link" href="#">View demo →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta wrap" id="contact">
          <div className="cta-box">
            <div>
              <h2>Start with a free discovery call. Built for founders.</h2>
              <p>Tell us what you&apos;re building — we&apos;ll bring senior thinking to the first conversation, no matter how small the team is.</p>
            </div>
            <a className="btn" href="/request-callback">Book a free call<span className="btn-arrow"></span></a>
          </div>
        </section>
      </main>

      <Footer isHome />
    </>
  );
}
