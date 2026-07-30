import Link from 'next/link';

export default function Footer({ isHome }) {
  const brandHref = isHome ? '#top' : '/';
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=contact%40tinitiate.com&su=TINITIATE%20Website%20Enquiry';
  return (
    <footer className="site-footer" id={isHome ? 'about' : undefined}>
      <div className="wrap site-footer-grid">
        <div className="footer-company">
          <Link className="footer-brand" href={brandHref} aria-label="Tinitiate home">
            <img className="footer-logo" src="/images/website_logo_white_bg_black_text.png" alt="Tinitiate Technologies" />
          </Link>
          <h4>Tinitiate Technologies Pvt Ltd</h4>
          <p>TINITIATE is a leading IT consulting and development company dedicated to empowering businesses with cutting-edge technology solutions. With deep expertise in IT services, database management, and cloud computing, we deliver tailored solutions for the evolving needs of enterprises worldwide.</p>

          <div className="social-block">
            <div className="social-label">Follow us</div>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/tinitiate/" target="_blank" rel="noopener noreferrer" aria-label="TINITIATE on LinkedIn" className="social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.74 1.86-2.74 3.76V24h-4V8z" /></svg>
              </a>
              <a href="https://www.youtube.com/@tinitiate" target="_blank" rel="noopener noreferrer" aria-label="TINITIATE on YouTube" className="social-link" title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-1C17.6 2.4 12 2.4 12 2.4h0s-5.6 0-8.6.4c-.4.1-1.3.1-2 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.4c.8.8 1.8.8 2.2.9 1.6.2 6.8.4 6.8.4s5.6 0 8.6-.4c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-2 .2-4V10.2c0-2-.2-4-.2-4zM9.6 14.8V7.9l6.4 3.5-6.4 3.4z" /></svg>
              </a>
              <a href="https://x.com/tinitiateprime/" target="_blank" rel="noopener noreferrer" aria-label="TINITIATE on X" className="social-link" title="X">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21.5l-7.51 8.57L22.5 22h-5.97l-4.67-5.51L6.5 22H3.244l8.04-9.17L1.5 2h6.09l4.22 5.02L18.244 2Zm-2.1 18h2.07L7.93 4H5.79l10.354 12.02Z" /></svg>
              </a>
              <a href="https://www.facebook.com/tinitiateprime" target="_blank" rel="noopener noreferrer" aria-label="TINITIATE on Facebook" className="social-link" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z" /></svg>
              </a>
              <a href="https://www.instagram.com/tinitiateprime/" target="_blank" rel="noopener noreferrer" aria-label="TINITIATE on Instagram" className="social-link" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11zM18.5 6a1.5 1.5 0 1 1-3.001.001A1.5 1.5 0 0 1 18.5 6z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-list">
            <div className="footer-icon-row">
              <span className="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="m4 6 8 7 8-7"></path></svg></span>
              <div>Email: <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">contact@tinitiate.com</a></div>
            </div>
            <div className="footer-icon-row">
              <span className="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6.28 6.28l1.19-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"></path></svg></span>
              <div><strong>USA:</strong> <a href="tel:+19736536870">+1 (973) 653-6870</a>, <a href="tel:+12068024102">+1 (206) 802-4102</a><br /><strong>India:</strong> <a href="tel:+919553495553">+91 95534 95553</a></div>
            </div>
            <address className="footer-icon-row">
              <span className="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
              <div><strong>Head Office:</strong><br />1420 Valley Trl,<br />Irving, TX 75063, USA</div>
            </address>
            <address className="footer-icon-row">
              <span className="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V7l8-4 6 4v14"></path><path d="M9 21v-6h6v6"></path></svg></span>
              <div><strong>Corporate Office:</strong><br />1-2/10 Sbh Colony Mohan Nagar, SBH Colony,<br />Kothapet, 500036, Telangana, India</div>
            </address>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">© <span className="footer-year">{new Date().getFullYear()}</span> TINITIATE Technologies Pvt Ltd. All rights reserved.</div>
    </footer>
  );
}
