'use client';
import Link from 'next/link';

export default function Header({ current }) {
  const isHome = current === 'home';
  const homeHref = isHome ? '#top' : '/';
  const entHref = isHome ? '#enterprise' : '/enterprise-services';
  const soloHref = isHome ? '#solo' : '/solo-entrepreneur-services';
  const cls = (name) => (current === name ? 'active' : '');

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href={homeHref} aria-label="Tinitiate home">
          <img className="brand-logo" src="/images/tinitiate-logo.png" alt="Tinitiate Technologies" />
        </Link>
        <ul className="nav-links">
          <li><Link href={homeHref} className={cls('home')}>Home</Link></li>
          <li className="has-dropdown">
            <Link href={entHref} className={`dropdown-toggle ${cls('enterprise')}`}>
              Enterprise Services <span className="caret">▾</span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/enterprise-services#ent-cloud">Cloud Migrations</Link></li>
              <li><Link href="/enterprise-services#ent-data">Data Engineering</Link></li>
              <li><Link href="/enterprise-services#ent-ai">AI Agentic ML Automation</Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href={soloHref} className={`dropdown-toggle ${cls('solo')}`}>
              {isHome ? 'Solo Entrepreneur - Small Business ' : (<>Solo Entrepreneur<br />Small Business </>)}
              <span className="caret">▾</span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/solo-entrepreneur-services#s-bpw">Business Process Workflows</Link></li>
              <li><Link href="/solo-entrepreneur-services#s-ai">AI Workers for Digital Processing</Link></li>
              <li><Link href="/solo-entrepreneur-services#s-plan">Planners &amp; Checklists</Link></li>
              <li><Link href="/solo-entrepreneur-services#s-prod">Products &amp; Services</Link></li>
              <li><Link href="/solo-entrepreneur-services#s-sales">Sales Management</Link></li>
              <li><Link href="/solo-entrepreneur-services#s-cust">Customer Management</Link></li>
            </ul>
          </li>
          <li><Link href="/case-studies" className={cls('case-studies')}>Case Studies</Link></li>
          <li><Link href="/contact" className={cls('contact')}>Contact</Link></li>
          <li><Link href="/about" className={cls('about')}>About</Link></li>
        </ul>
        <div className="nav-cta">
          <Link className="btn btn-white" href="/request-callback">Book a free call<span className="btn-arrow"></span></Link>
        </div>
      </div>
    </header>
  );
}
