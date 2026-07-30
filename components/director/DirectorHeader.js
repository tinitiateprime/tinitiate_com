'use client';
import Link from 'next/link';

export default function DirectorHeader({ current }) {
  const isHome = current === 'home';
  const homeHref = isHome ? '#top' : '/director';
  const cls = (name) => (current === name ? 'active' : '');

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href={homeHref} aria-label="Venkata Bhattaram">
          <span className="brand-name">Venkata Bhattaram</span>
          <span className="brand-tag">Founder &amp; Director</span>
          <span className="brand-tag">TINITIATE TECHNOLOGIES</span>
        </Link>
        <ul className="nav-links">
          <li><Link href={homeHref} className={cls('home')}>Home</Link></li>
          <li className="has-dropdown">
            <Link href="/director/enterprise-services" className={`dropdown-toggle ${cls('enterprise')}`}>
              Enterprise <span className="caret">▾</span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/director/enterprise-services#cloud">Cloud Migrations</Link></li>
              <li><Link href="/director/enterprise-services#dataeng">Data Engineering</Link></li>
              <li><Link href="/director/enterprise-services#aiml">AI/ML Automation &amp; Agentic</Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="/director/small-business-services" className={`dropdown-toggle ${cls('solo')}`}>
              Solo Entrepreneur<br />&amp; Small Business <span className="caret">▾</span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/director/small-business-services#ai-workers">Social Media AI Workers</Link></li>
              <li><Link href="/director/small-business-services#bpw">Business Process Workflows</Link></li>
              <li><Link href="/director/small-business-services#planning">Calendars, Planners &amp; Checklists</Link></li>
              <li><Link href="/director/small-business-services#web-apps">Website/Apps for Products &amp; Services</Link></li>
              <li><Link href="/director/small-business-services#customer-sales">Customer &amp; Sales Management</Link></li>
              <li><Link href="/director/small-business-services#seo-social">SEO for AI, Social Media &amp; Search</Link></li>
            </ul>
          </li>
        </ul>
        <div className="gh-row">
          <a className="gh-link" href="https://github.com/v-bhattaram" target="_blank" rel="noopener">
            <img className="gh-badge" loading="lazy" alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a className="gh-link" href="https://www.linkedin.com/in/venkata-bhattaram/" target="_blank" rel="noopener">
            <img className="gh-badge" loading="lazy" alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
        </div>
      </div>
    </header>
  );
}
