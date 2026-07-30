import DirectorHeader from '../../../components/director/DirectorHeader';
import Footer from '../../../components/Footer';
import SkillCard from '../../../components/director/SkillCard';
import {
  IconDownload,
  IconTriNetwork,
  IconHouse,
  IconWave,
  IconShieldCheck,
  IconDoubleChevron,
  IconGauge,
  IconDashedSquare,
  IconHub,
  IconRefresh,
} from '../../../components/director/GroupIcons';
import '../director-small-business.css';

export const metadata = {
  title: 'Venkata Bhattaram — Solo Entrepreneur & Small Business Services',
  description: 'Venkata Bhattaram — social media AI workers, business process workflows, calendars/planners/checklists, website/apps for products & services, customer & sales management, and SEO for AI, social media & search.',
  openGraph: {
    title: 'Venkata Bhattaram — Solo Entrepreneur & Small Business Services',
    description: 'Social media AI workers, business process workflows, planners & checklists, website/apps for products & services, customer & sales management, and SEO.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const Group = ({ icon, label, tools }) => (
  <div>
    <div className="skill-group-label">{icon}<span>{label}</span></div>
    <div className="skill-tools">
      {tools.map((tool) => (
        <span className="skill-tool" key={tool}>{tool}</span>
      ))}
    </div>
  </div>
);

export default function SmallBusinessServicesPage() {
  return (
    <>
      <DirectorHeader current="solo" />

      <main id="top">

        {/* AI WORKERS FOR DIGITAL PROCESSING */}
        <section className="skills" id="ai-workers">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">01 / Social automation</p>
              <h2 className="section-title">Social media AI workers</h2>
              <p className="section-sub">AI workers that plan, post, and report across every account — and keep your customer, catalog, and order data in sync — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="aiworker1"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M6 8h28a3 3 0 013 3v14a3 3 0 01-3 3H17l-8 6.5V28H6a3 3 0 01-3-3V11a3 3 0 013-3Z" strokeWidth="1.4" />
                    <circle cx="13" cy="18" r="1.7" fill="currentColor" stroke="none" />
                    <circle cx="20" cy="18" r="1.7" fill="currentColor" stroke="none" />
                    <circle cx="27" cy="18" r="1.7" fill="currentColor" stroke="none" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M6 8h28a3 3 0 013 3v14a3 3 0 01-3 3H17l-8 6.5V28H6a3 3 0 01-3-3V11a3 3 0 013-3Z" strokeWidth="2" />
                    <circle cx="13" cy="18" r="2" fill="currentColor" stroke="none" />
                    <circle cx="20" cy="18" r="2" fill="currentColor" stroke="none" />
                    <circle cx="27" cy="18" r="2" fill="currentColor" stroke="none" />
                  </svg>
                )}
                title="Social Media AI Workers"
                description="LinkedIn, Facebook & Instagram — one worker, every account"
              >
                <Group icon={<IconHouse />} label="Platforms" tools={['LinkedIn', 'Facebook', 'Instagram']} />
                <Group icon={<IconDashedSquare />} label="Account setup" tools={['Configure multiple accounts']} />
                <Group icon={<IconDownload />} label="Publishing" tools={['Automatic posting management', 'Posting schedules']} />
                <Group icon={<IconGauge />} label="Performance" tools={['Post metrics on engagements']} />
              </SkillCard>

              <SkillCard
                platform="aiworker2"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M20 5C12.5 5 6.25 7 6.25 10S12.5 15 20 15s13.75-2 13.75-5S27.5 5 20 5Z" strokeWidth="1.4" />
                    <path d="M6.25 10v20c0 3 6.15 5 13.75 5s13.75-2 13.75-5V10" strokeWidth="1.4" />
                    <path d="M6.25 20c0 3 6.15 5 13.75 5s13.75-2 13.75-5" strokeWidth="1.2" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M20 5C12.5 5 6.25 7 6.25 10S12.5 15 20 15s13.75-2 13.75-5S27.5 5 20 5Z" strokeWidth="2" />
                    <path d="M6.25 10v20c0 3 6.15 5 13.75 5s13.75-2 13.75-5V10" strokeWidth="2" />
                    <path d="M6.25 20c0 3 6.15 5 13.75 5s13.75-2 13.75-5" strokeWidth="1.8" />
                  </svg>
                )}
                title="Data Management AI"
                description="Customer, product, pricing & orders data — always in sync"
              >
                <Group icon={<IconHub />} label="Customer data" tools={['Customer data', 'Contacts']} />
                <Group icon={<IconDashedSquare />} label="Catalog & pricing" tools={['Products & services data', 'Pricing data']} />
                <Group icon={<IconDownload />} label="Orders" tools={['Orders data handling with ease']} />
                <Group icon={<IconDoubleChevron />} label="Showcasing" tools={['Never miss showcasing']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* BUSINESS PROCESS WORKFLOWS */}
        <section className="skills" id="bpw">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">02 / Core capabilities</p>
              <h2 className="section-title">Business process workflows</h2>
              <p className="section-sub">Custom workflows built on our AI engine — roles, tasks, monitoring, and reporting that scale with you — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="discovery"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="3" y="16" width="10" height="8" rx="1.6" strokeWidth="1.3" />
                    <rect x="15" y="4" width="10" height="8" rx="1.6" strokeWidth="1.3" />
                    <rect x="15" y="28" width="10" height="8" rx="1.6" strokeWidth="1.3" />
                    <rect x="27" y="16" width="10" height="8" rx="1.6" strokeWidth="1.3" />
                    <path d="M13 20h2M20 12v4M20 28v-4M25 20h2" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="3" y="16" width="10" height="8" rx="1.6" strokeWidth="2" />
                    <rect x="15" y="4" width="10" height="8" rx="1.6" strokeWidth="2" />
                    <rect x="15" y="28" width="10" height="8" rx="1.6" strokeWidth="2" />
                    <rect x="27" y="16" width="10" height="8" rx="1.6" strokeWidth="2" />
                    <path d="M13 20h2M20 12v4M20 28v-4M25 20h2" strokeWidth="1.6" />
                  </svg>
                )}
                title="AI-Powered Workflow Engine"
                description="Custom workflows, roles, tasks, monitoring & reporting"
              >
                <Group icon={<IconHouse />} label="Custom workflows" tools={['Custom workflows using our AI engine']} />
                <Group icon={<IconDownload />} label="Roles & tasks" tools={['Create roles, tasks, monitoring and reporting']} />
              </SkillCard>

              <SkillCard
                platform="platform"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <circle cx="20" cy="20" r="8" strokeWidth="1.3" />
                    <circle cx="20" cy="20" r="2.4" strokeWidth="1" />
                    <path d="M20 6v4M20 30v4M6 20h4M30 20h4M9.8 9.8l2.8 2.8M27.4 27.4l2.8 2.8M9.8 30.2l2.8-2.8M27.4 12.6l2.8-2.8" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <circle cx="20" cy="20" r="8" strokeWidth="2" />
                    <circle cx="20" cy="20" r="2.4" strokeWidth="1.6" />
                    <path d="M20 6v4M20 30v4M6 20h4M30 20h4M9.8 9.8l2.8 2.8M27.4 27.4l2.8 2.8M9.8 30.2l2.8-2.8M27.4 12.6l2.8-2.8" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                title="Reliability & Scale"
                description="Missed actions, automatic corrections, easy scaling"
              >
                <Group icon={<IconDoubleChevron />} label="Exception handling" tools={['Missed actions', 'Notifications', 'Automatic process corrections']} />
                <Group icon={<IconGauge />} label="Scalability" tools={['Easy to scale operations']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* CALENDARS, PLANNERS & CHECKLISTS */}
        <section className="skills" id="planning">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">03 / Stay in sync</p>
              <h2 className="section-title">Calendars, planners &amp; checklists</h2>
              <p className="section-sub">To-dos, shared calendars, reminders, and notifications that keep a small team in sync without a status-meeting habit — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="plan1"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="5" y="7" width="30" height="28" rx="3" strokeWidth="1.4" />
                    <path d="M5 15h30" strokeWidth="1.2" />
                    <path d="M13 4v6M27 4v6" strokeWidth="1.4" strokeLinecap="round" />
                    <rect x="11" y="20" width="5" height="5" rx="1" strokeWidth="1.1" />
                    <rect x="24" y="20" width="5" height="5" rx="1" strokeWidth="1.1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="5" y="7" width="30" height="28" rx="3" strokeWidth="2" />
                    <path d="M5 15h30" strokeWidth="1.8" />
                    <path d="M13 4v6M27 4v6" strokeWidth="2" strokeLinecap="round" />
                    <rect x="11" y="20" width="5" height="5" rx="1" strokeWidth="1.6" />
                    <rect x="24" y="20" width="5" height="5" rx="1" strokeWidth="1.6" />
                  </svg>
                )}
                title="Planners & Shared Calendars"
                description="Shared team calendars, scheduling, planners"
              >
                <Group icon={<IconHouse />} label="Shared calendars" tools={['Google Calendar', 'Outlook Calendar', 'Notion Calendar']} />
                <Group icon={<IconDashedSquare />} label="Planners" tools={['Weekly / sprint planners', 'Content calendars']} />
                <Group icon={<IconTriNetwork />} label="Scheduling" tools={['Meeting scheduling', 'Appointment booking']} />
                <Group icon={<IconWave />} label="Team sync" tools={['One-page workflows', 'Clear ownership']} />
              </SkillCard>

              <SkillCard
                platform="plan2"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="7" y="5" width="26" height="30" rx="3" strokeWidth="1.4" />
                    <path d="M13 14h14M13 20h14M13 26h9" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M9.5 14l1.3 1.3L13 12.5" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="7" y="5" width="26" height="30" rx="3" strokeWidth="2" />
                    <path d="M13 14h14M13 20h14M13 26h9" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M9.5 14l1.3 1.3L13 12.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                title="Checklists, To-Dos & Reminders"
                description="Recurring tasks, notifications, follow-ups"
              >
                <Group icon={<IconDashedSquare />} label="Task & checklist apps" tools={['Todoist', 'Trello', 'Asana']} />
                <Group icon={<IconDownload />} label="Recurring tasks" tools={['Standing checklists', 'Routine automation']} />
                <Group icon={<IconWave />} label="Reminders" tools={['Push / email / SMS reminders', 'Deadline alerts']} />
                <Group icon={<IconShieldCheck />} label="Notifications" tools={['Team notifications', 'No status-meeting habit']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* WEBSITE/APPS FOR PRODUCTS & SERVICES */}
        <section className="skills" id="web-apps">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">04 / What you sell</p>
              <h2 className="section-title">Website/apps for products &amp; services</h2>
              <p className="section-sub">One source of truth for what you sell — master catalogs, pricing, and the site or app that presents them — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="webapp1"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="4" y="8" width="32" height="24" rx="3" strokeWidth="1.4" />
                    <path d="M4 15h32" strokeWidth="1.2" />
                    <circle cx="9" cy="11.5" r="1" fill="currentColor" stroke="none" />
                    <circle cx="13" cy="11.5" r="1" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="11.5" r="1" fill="currentColor" stroke="none" />
                    <path d="M11 24l5-5 4 4 7-7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="4" y="8" width="32" height="24" rx="3" strokeWidth="2" />
                    <path d="M4 15h32" strokeWidth="1.6" />
                    <circle cx="9" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="13" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
                    <path d="M11 24l5-5 4 4 7-7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                title="Customer-Facing Websites & Checkout"
                description="Websites, shopping carts, payment gateways"
              >
                <Group icon={<IconDashedSquare />} label="Websites" tools={['Customer-facing websites']} />
                <Group icon={<IconDownload />} label="Commerce" tools={['Shopping carts', 'Payment gateway integrations']} />
              </SkillCard>

              <SkillCard
                platform="webapp2"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M6 14l2.5-8h23L34 14" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M6 14v18a2 2 0 002 2h24a2 2 0 002-2V14" strokeWidth="1.3" />
                    <path d="M6 14a4 4 0 008 0 4 4 0 008 0 4 4 0 008 0 4 4 0 008 0" strokeWidth="1.1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M6 14l2.5-8h23L34 14" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M6 14v18a2 2 0 002 2h24a2 2 0 002-2V14" strokeWidth="1.8" />
                    <path d="M6 14a4 4 0 008 0 4 4 0 008 0 4 4 0 008 0 4 4 0 008 0" strokeWidth="1.6" />
                  </svg>
                )}
                title="Admin & Content Management"
                description="Product & pricing admin, customer notifications"
              >
                <Group icon={<IconDashedSquare />} label="Product & pricing admin" tools={['Admin for product and pricing management']} />
                <Group icon={<IconDownload />} label="Customer notifications" tools={['Custom notifications for customers']} />
                <Group icon={<IconRefresh />} label="Content" tools={['Advanced content management']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* CUSTOMER & SALES MANAGEMENT */}
        <section className="skills" id="customer-sales">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">05 / Core capabilities</p>
              <h2 className="section-title">Customer &amp; sales management</h2>
              <p className="section-sub">One messaging hub for every channel, with AI to triage what matters — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="crm"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="6" y="8" width="28" height="24" rx="3" strokeWidth="1.3" />
                    <circle cx="15" cy="18" r="4" strokeWidth="1.1" />
                    <path d="M9 28c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="1.1" />
                    <path d="M23 15h7M23 20h7M23 25h4" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="6" y="8" width="28" height="24" rx="3" strokeWidth="1.8" />
                    <circle cx="15" cy="18" r="4" strokeWidth="1.6" />
                    <path d="M9 28c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="1.6" />
                    <path d="M23 15h7M23 20h7M23 25h4" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )}
                title="Multi-Channel Messaging Hub"
                description="WhatsApp, Telegram, SMS & Signal — one inbox"
              >
                <Group icon={<IconDashedSquare />} label="Channels" tools={['WhatsApp', 'Telegram', 'SMS', 'Signal']} />
                <Group icon={<IconDownload />} label="Unified inbox" tools={['Multiple chats in same window']} />
              </SkillCard>

              <SkillCard
                platform="engage"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <circle cx="14" cy="14" r="5" strokeWidth="1.3" />
                    <path d="M5 30c0-5 4-8.5 9-8.5s9 3.5 9 8.5" strokeWidth="1.1" />
                    <circle cx="28" cy="17" r="4" strokeWidth="1.1" />
                    <path d="M22 30c.3-4 3-7 6-7s5.5 2.5 6.5 6" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <circle cx="14" cy="14" r="5" strokeWidth="1.8" />
                    <path d="M5 30c0-5 4-8.5 9-8.5s9 3.5 9 8.5" strokeWidth="1.6" />
                    <circle cx="28" cy="17" r="4" strokeWidth="1.6" />
                    <path d="M22 30c.3-4 3-7 6-7s5.5 2.5 6.5 6" strokeWidth="1.4" />
                  </svg>
                )}
                title="AI Chat Engagement & Triage"
                description="Lead, complaint & enquiry identification"
              >
                <Group icon={<IconHub />} label="Engagement analysis" tools={['Chat engagement and AI analysis']} />
                <Group icon={<IconShieldCheck />} label="Classification" tools={['Identify chat as lead, complaint or enquiry']} />
                <Group icon={<IconWave />} label="Notifications" tools={['Chat notifications']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* SEO FOR AI, SOCIAL MEDIA & SEARCH */}
        <section className="skills" id="seo-social">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">06 / Get found</p>
              <h2 className="section-title">SEO for AI, social media &amp; search</h2>
              <p className="section-sub">Visibility across AI answer engines, social feeds, and search — plus the competitive intelligence to act on it — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="social"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="6" y="8" width="24" height="16" rx="4" strokeWidth="1.3" />
                    <path d="M14 24l-3 6 7-6" strokeWidth="1.1" strokeLinejoin="round" />
                    <path d="M30 6l1.2 2.6L34 9.8l-2.3 1.8L32.2 14 30 12.4 27.8 14l.5-2.4L26 9.8l2.8-1.2Z" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="6" y="8" width="24" height="16" rx="4" strokeWidth="1.8" />
                    <path d="M14 24l-3 6 7-6" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M30 6l1.2 2.6L34 9.8l-2.3 1.8L32.2 14 30 12.4 27.8 14l.5-2.4L26 9.8l2.8-1.2Z" strokeWidth="1.4" />
                  </svg>
                )}
                title="AI, Social & Search Coverage"
                description="SEO for AI, social media & search"
              >
                <Group icon={<IconHouse />} label="Coverage areas" tools={['AI', 'Social Media', 'Search']} />
              </SkillCard>

              <SkillCard
                platform="campaign"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <circle cx="18" cy="20" r="13" strokeWidth="1.3" />
                    <circle cx="18" cy="20" r="7.5" strokeWidth="1.1" />
                    <circle cx="18" cy="20" r="2" strokeWidth="1" />
                    <path d="M27 9l7-4-2 8-5-1z" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M25 13L34 5" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <circle cx="18" cy="20" r="13" strokeWidth="1.8" />
                    <circle cx="18" cy="20" r="7.5" strokeWidth="1.6" />
                    <circle cx="18" cy="20" r="2" strokeWidth="1.4" />
                    <path d="M27 9l7-4-2 8-5-1z" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M25 13L34 5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                title="Competitive & Local Intelligence"
                description="Competitor analysis, location & product SEO"
              >
                <Group icon={<IconDoubleChevron />} label="Competitor analysis" tools={['Advanced competitor analysis']} />
                <Group icon={<IconGauge />} label="Targeting" tools={['Location-based SEO', 'Product-based SEO']} />
              </SkillCard>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
