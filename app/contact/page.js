import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact - Tinitiate',
  description: 'Contact Tinitiate Technologies Pvt Ltd for Enterprise Services (cloud, data engineering, agentic AI) or Solo Entrepreneur & Small Business Services (workflows, AI workers, sales, and customer tools).',
  openGraph: {
    title: 'Contact - Tinitiate',
    description: 'Reach Tinitiate for Enterprise Services — cloud, data, and AI automation — or Solo Entrepreneur & Small Business Services — workflows, AI workers, and growth systems.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function ContactPage() {
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=contact%40tinitiate.com&su=TINITIATE%20Website%20Enquiry';

  return (
    <>
      <Header current="contact" />
      <main>
        <section className="hero wrap">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s talk about <em>what you are building</em>.</h1>
          <p className="lede">Reach Tinitiate for Enterprise Services — cloud, data engineering, and agentic AI — or Solo Entrepreneur &amp; Small Business Services — workflows, AI workers, sales, and customer tools.</p>
        </section>
        <section className="wrap contact-grid">
          <div className="card panel">
            <h2>Contact Us</h2>
            <div className="contact-list">
              <div>Email: <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">contact@tinitiate.com</a></div>
              <div><strong>USA:</strong> <a href="tel:+19736536870">+1 (973) 653-6870</a>, <a href="tel:+12068024102">+1 (206) 802-4102</a></div>
              <div><strong>India:</strong> <a href="tel:+919553495553">+91 95534 95553</a></div>
            </div>
            <p className="note">For new projects, include your business goal, current systems, timeline, and the kind of support you need.</p>
            <a className="btn" href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}>Email Tinitiate<span className="btn-arrow"></span></a>
          </div>
          <div className="card panel">
            <h2>Offices</h2>
            <div className="office-grid">
              <address className="office"><strong>Head Office</strong><br />1420 Valley Trl,<br />Irving, TX 75063, USA</address>
              <address className="office"><strong>Corporate Office</strong><br />1-2/10 Sbh Colony Mohan Nagar, SBH Colony,<br />Kothapet, 500036, Telangana, India</address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
