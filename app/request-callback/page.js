import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RequestCallbackForm from './RequestCallbackForm';

export const metadata = {
  title: 'Request a Callback - Tinitiate',
  description: 'Book a free call with Tinitiate to discuss your cloud, data, AI automation, workflow, sales, or customer management requirements.',
};

const serviceLabels = {
  'enterprise-services': 'Enterprise services',
  'cloud-migrations': 'Cloud migrations',
  'data-engineering': 'Data engineering',
  'ai-automation': 'AI and agentic automation',
  'small-business-services': 'Solo entrepreneur and small business services',
  'business-workflows': 'Business process workflows',
  'ai-workers': 'AI workers for digital processing',
  'planning-tools': 'Planners and checklists',
  'product-management': 'Products and services management',
  'sales-management': 'Sales management',
  'customer-management': 'Customer management',
};

export default function RequestCallbackPage({ searchParams }) {
  const requestedService = typeof searchParams?.service === 'string' ? searchParams.service : '';
  const initialService = serviceLabels[requestedService] || '';

  return (
    <>
      <Header />
      <main>
        <section className="hero wrap callback-hero">
          <p className="eyebrow">Free consultation</p>
          <h1>Tell us what you are building.</h1>
          <p className="lede">Share a few details and our team will contact you to arrange a focused, no-obligation call.</p>
        </section>

        <section className="wrap callback-layout">
          <div className="callback-copy">
            <h2 className="section-title">Start with the right conversation</h2>
            <p>Whether you are modernizing an enterprise platform or improving day-to-day business operations, we will connect you with the right specialist.</p>
            <div className="callback-points">
              <div><strong>Enterprise</strong><span>Cloud, data engineering, and AI automation</span></div>
              <div><strong>Small business</strong><span>Workflows, AI workers, sales, and customer tools</span></div>
              <div><strong>Worldwide</strong><span>Irving, Hyderabad, and remote delivery</span></div>
            </div>
          </div>

          <RequestCallbackForm initialService={initialService} />
        </section>
      </main>
      <Footer />
    </>
  );
}
