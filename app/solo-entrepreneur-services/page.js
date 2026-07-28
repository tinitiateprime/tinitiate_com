import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Solo Entrepreneur & Small Business Services - Tinitiate',
  description: 'Tinitiate services for solo entrepreneurs and small businesses: business process workflows, AI workers for digital processing, planners and checklists, product/price/order/data masters, sales management, and customer management.',
  openGraph: {
    title: 'Solo Entrepreneur & Small Business Services - Tinitiate',
    description: 'Business process workflows, AI workers for digital processing, planners and checklists, product and order masters, sales management, and customer management — sized for solo founders and small teams.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const Tick = () => (
  <span className="tick"><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg></span>
);

export default function SoloEntrepreneurServicesPage() {
  return (
    <>
      <Header current="solo" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow"><span className="cap-tag solo">Track 02</span> Solo Entrepreneur &amp; Small Business Services</p>
          <h1>Run your business <em>like a bigger team</em>.</h1>
          <p className="lede">Built for solopreneurs and small companies who need workflows, AI workers, planners, catalogs, sales, and customer tracking to just work — without hiring a back office or stacking five subscriptions that don&apos;t talk to each other.</p>
          <div className="chips" aria-label="Who this is for">
            <span className="chip">Solo founders</span>
            <span className="chip">2–10 person teams</span>
            <span className="chip">Bootstrapped startups</span>
            <span className="chip">No minimum team size</span>
            <span className="chip">No enterprise contracts</span>
          </div>
        </section>

        <section className="services wrap track-teal" id="services">
          <h2 className="section-title">What we cover</h2>
          <p className="section-sub">Six ways we run the back office of a solo founder or a small team — sized for a team of one to ten.</p>

          <div className="svc-rows">
            <div className="svc-row" id="s-bpw">
              <div>
                <p className="svc-eyebrow">01 / Business Process</p>
                <h3>Workflows that work when it&apos;s just you</h3>
                <p className="svc-desc">Team and roles planning, role/task planning and tracking, with a website or app included — not a forty-page operating manual nobody opens.</p>
                <a className="btn" href="/request-callback?service=business-workflows">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Team &amp; Roles Planning</div>
                <div className="check-item"><Tick />Role &amp; Task Tracking</div>
                <div className="check-item"><Tick />Website/App Included</div>
                <div className="check-item"><Tick />One-Page Workflows</div>
                <div className="check-item"><Tick />Clear Ownership</div>
                <div className="check-item"><Tick />Grows With You</div>
              </div>
            </div>

            <div className="svc-row" id="s-ai">
              <div>
                <p className="svc-eyebrow">02 / AI Workers</p>
                <h3>AI workers for digital processing</h3>
                <p className="svc-desc">Auto-reply on WhatsApp, Instagram, and email, plus a marketing and campaign planner and executor — with a human in the loop, not a bot flying blind.</p>
                <a className="btn" href="/request-callback?service=ai-workers">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />WhatsApp Auto-Reply</div>
                <div className="check-item"><Tick />Instagram &amp; Email Auto-Reply</div>
                <div className="check-item"><Tick />Campaign Planning &amp; Execution</div>
                <div className="check-item"><Tick />Human-in-the-Loop</div>
                <div className="check-item"><Tick />Guardrails Included</div>
                <div className="check-item"><Tick />Affordable to Run</div>
              </div>
            </div>

            <div className="svc-row" id="s-plan">
              <div>
                <p className="svc-eyebrow">03 / Planning</p>
                <h3>Planners, checklists, and reminders in one place</h3>
                <p className="svc-desc">To-dos, shared calendars, reminders, and notifications that keep a small team in sync without a status-meeting habit.</p>
                <a className="btn" href="/request-callback?service=planning-tools">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Planners</div>
                <div className="check-item"><Tick />Checklists</div>
                <div className="check-item"><Tick />To-Dos</div>
                <div className="check-item"><Tick />Shared Calendars</div>
                <div className="check-item"><Tick />Reminders</div>
                <div className="check-item"><Tick />Notifications</div>
              </div>
            </div>

            <div className="svc-row" id="s-prod">
              <div>
                <p className="svc-eyebrow">04 / Products &amp; Services</p>
                <h3>One source of truth for what you sell</h3>
                <p className="svc-desc">Master catalogs, price masters, order billing and tracking, and data management for images, spreadsheets, names, tags, and prices — connected instead of scattered across files.</p>
                <a className="btn" href="/request-callback?service=product-management">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Master Catalogs</div>
                <div className="check-item"><Tick />Price Masters</div>
                <div className="check-item"><Tick />Order Billing &amp; Tracking</div>
                <div className="check-item"><Tick />Data Management (Images, Sheets, Tags)</div>
              </div>
            </div>

            <div className="svc-row" id="s-sales">
              <div>
                <p className="svc-eyebrow">05 / Sales Management</p>
                <h3>Post, measure, and watch the competition</h3>
                <p className="svc-desc">Social media posting, post performance metrics, and competitor analysis in one connected view — no agency retainer needed.</p>
                <a className="btn" href="/request-callback?service=sales-management">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Social Media Posting</div>
                <div className="check-item"><Tick />Post Performance Metrics</div>
                <div className="check-item"><Tick />Competitor Analysis</div>
                <div className="check-item"><Tick />One Connected System</div>
                <div className="check-item"><Tick />No Agency Retainer</div>
                <div className="check-item"><Tick />Affordable to Run</div>
              </div>
            </div>

            <div className="svc-row" id="s-cust">
              <div>
                <p className="svc-eyebrow">06 / Customer Management</p>
                <h3>One view of every customer</h3>
                <p className="svc-desc">Customer management, interaction history, unified messaging, and shopping carts — so no conversation or order gets lost between tools.</p>
                <a className="btn" href="/request-callback?service=customer-management">Book a free call<span className="btn-arrow"></span></a>
              </div>
              <div className="check-grid">
                <div className="check-item"><Tick />Customer Management</div>
                <div className="check-item"><Tick />Interaction History</div>
                <div className="check-item"><Tick />Unified Messaging</div>
                <div className="check-item"><Tick />Shopping Carts</div>
                <div className="check-item"><Tick />One Customer View</div>
                <div className="check-item"><Tick />No Extra Subscriptions</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta wrap" id="contact">
          <div className="cta-box">
            <div>
              <h2>Start with a free discovery call. Built for founders.</h2>
              <p>Tell us what you&apos;re running today — we&apos;ll show you what one connected system replaces.</p>
            </div>
            <a className="btn" href="/request-callback?service=small-business-services">Book a free call<span className="btn-arrow"></span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
