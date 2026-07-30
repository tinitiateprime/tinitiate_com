import Link from 'next/link';
import DirectorHeader from '../../components/director/DirectorHeader';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Venkata Bhattaram — Founder & Director, Tinitiate Technologies',
  description: 'Venkata Bhattaram, Founder & Director at Tinitiate Technologies Pvt Ltd — cloud data engineering, AI/ML automation & agentic platforms, business process pipelines, and CRM & social media engagement.',
  openGraph: {
    title: 'Venkata Bhattaram — Founder & Director, Tinitiate Technologies',
    description: 'Business Process Pipelines · Cost Savings · Process Optimizations — cloud data engineering, AI/ML automation & agentic platforms.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M3 8h9M8 3l5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function DirectorHomePage() {
  return (
    <>
      <DirectorHeader current="home" />

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Founder &amp; Director · Tinitiate Technologies Pvt Ltd</p>
            <h1 className="hero-title">Venkata Bhattaram</h1>
            <p className="hero-sub">Business Process Pipelines · Cost Savings · Process Optimizations</p>
            <p className="hero-copy">I design and ship end-to-end systems across cloud data engineering, AI/ML automation &amp; agentic platforms, business process pipelines, and CRM &amp; social media engagement — with a consistent focus on measurable cost savings and process optimization.</p>
          </div>
        </section>

        <section className="skills" id="specializations">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">Explore</p>
              <h2 className="section-title">Specializations</h2>
              <p className="section-sub">Two ways I engage — as an enterprise delivery partner, and as a hands-on partner for solo entrepreneurs and small businesses. Pick a track to see the full platform and tool breakdown.</p>
            </div>

            <div className="track-grid">

              <div className="track-col">
                <h3 className="track-heading">For Enterprises</h3>
                <p className="track-sub">Cloud, data, and agentic AI at scale.</p>

                <Link className="spec-card" data-track="enterprise" href="/director/enterprise-services">
                  <div className="spec-head">
                    <span className="spec-icon" aria-hidden="true">
                      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <rect x="12" y="6" width="16" height="30" rx="1.5" strokeWidth="1.8" />
                        <path d="M17 12h2M21 12h2M17 17h2M21 17h2M17 22h2M21 22h2M17 27h2M21 27h2" strokeWidth="1.6" />
                        <path d="M6 36h28" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <h3 className="spec-title">Enterprise Services</h3>
                  </div>
                  <p className="spec-desc">Cloud migrations, multi-stack data engineering, and agentic AI/ML automation.</p>
                  <div className="spec-meta"><span className="spec-dot" aria-hidden="true"></span>Enterprise Track</div>
                </Link>

                <ul className="section-links">
                  <li><Link href="/director/enterprise-services#cloud"><span><span className="num">01</span>Cloud Migrations</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/enterprise-services#dataeng"><span><span className="num">02</span>Data Engineering</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/enterprise-services#aiml"><span><span className="num">03</span>AI/ML Automation &amp; Agentic</span><ArrowIcon /></Link></li>
                </ul>
              </div>

              <div className="track-col">
                <h3 className="track-heading">For Solo Entrepreneur &amp; Small Business</h3>
                <p className="track-sub">Workflows, AI workers, planners, and growth systems.</p>

                <Link className="spec-card" data-track="solo" href="/director/small-business-services">
                  <div className="spec-head">
                    <span className="spec-icon" aria-hidden="true">
                      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <path d="M20 4c5 5 7 12 5 20l-5 6-5-6c-2-8 0-15 5-20Z" strokeWidth="1.8" />
                        <circle cx="20" cy="16" r="3" strokeWidth="1.6" />
                        <path d="M13 26l-4 8 8-4M27 26l4 8-8-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3 className="spec-title">Solo Entrepreneur &amp; Small Business</h3>
                  </div>
                  <p className="spec-desc">Workflows, AI workers, planners, catalogs, sales, and customer tools for a team of one to ten.</p>
                  <div className="spec-meta"><span className="spec-dot" aria-hidden="true"></span>Solo Track</div>
                </Link>

                <ul className="section-links">
                  <li><Link href="/director/small-business-services#ai-workers"><span><span className="num">01</span>Social Media AI Workers</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/small-business-services#web-apps"><span><span className="num">04</span>Website/Apps for Products &amp; Services</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/small-business-services#bpw"><span><span className="num">02</span>Business Process Workflows</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/small-business-services#planning"><span><span className="num">03</span>Calendars, Planners &amp; Checklists</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/small-business-services#customer-sales"><span><span className="num">05</span>Customer &amp; Sales Management</span><ArrowIcon /></Link></li>
                  <li><Link href="/director/small-business-services#seo-social"><span><span className="num">06</span>SEO for AI, Social Media &amp; Search</span><ArrowIcon /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="wrap">
            <div className="pill-groups">
              <div>
                <p className="pill-group-label">AI, Automation &amp; Agentic</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="LangChain" src="https://custom-icon-badges.demolab.com/badge/LangChain-1C3C3C.svg?logo=langchain&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="LangGraph" src="https://custom-icon-badges.demolab.com/badge/LangGraph-1C3C3C.svg?logo=langgraph&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="LangSmith" src="https://custom-icon-badges.demolab.com/badge/LangSmith-1C3C3C.svg?logo=langchain&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="MCP" src="https://custom-icon-badges.demolab.com/badge/MCP-000000.svg?logo=anthropic&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="RAG" src="https://custom-icon-badges.demolab.com/badge/RAG-FF6B35.svg?logo=databricks&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="CrewAI" src="https://custom-icon-badges.demolab.com/badge/CrewAI-6D28D9.svg?logo=crewai&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="OpenClaw" src="https://custom-icon-badges.demolab.com/badge/OpenClaw-000000.svg?logo=github&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Bedrock" src="https://custom-icon-badges.demolab.com/badge/Bedrock-FF9900.svg?logo=amazonaws&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Azure AI Foundry" src="https://custom-icon-badges.demolab.com/badge/Azure%20AI%20Foundry-0078D4.svg?logo=microsoftazure&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Ollama" src="https://custom-icon-badges.demolab.com/badge/Ollama-000000.svg?logo=ollama&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="OpenAI" src="https://custom-icon-badges.demolab.com/badge/OpenAI-412991.svg?logo=openai&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Anthropic" src="https://custom-icon-badges.demolab.com/badge/Anthropic-D97706.svg?logo=anthropic&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Weaviate" src="https://custom-icon-badges.demolab.com/badge/Weaviate-00C7B7.svg?logo=weaviate&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Pinecone" src="https://custom-icon-badges.demolab.com/badge/Pinecone-14B8A6.svg?logo=pinecone&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Qdrant" src="https://custom-icon-badges.demolab.com/badge/Qdrant-DC244C.svg?logo=qdrant&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Python &amp; Related Libraries</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="Python" src="https://img.shields.io/badge/Python-14354C.svg?logo=python&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="NumPy" src="https://img.shields.io/badge/Numpy-013243.svg?logo=numpy&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Pandas" src="https://img.shields.io/badge/Pandas-150458.svg?logo=pandas&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Polars" src="https://img.shields.io/badge/Polars-CD792C.svg?logo=polars&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Matplotlib" src="https://img.shields.io/badge/Matplotlib-11557c.svg?logo=matplotlib&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Seaborn" src="https://img.shields.io/badge/Seaborn-4c72b0.svg" />
                  <img className="pill-badge" loading="lazy" alt="SymPy" src="https://img.shields.io/badge/Sympy-3B5526.svg?logo=sympy&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="scikit-learn" src="https://img.shields.io/badge/scikit--learn-F7931E.svg?logo=scikitlearn&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="TensorFlow" src="https://img.shields.io/badge/TensorFlow-FF6F00.svg?logo=TensorFlow&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Flask" src="https://img.shields.io/badge/Flask-000000.svg?logo=flask&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688.svg?logo=fastapi&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="APIs" src="https://img.shields.io/badge/APIs-85EA2D.svg?logo=swagger&logoColor=black" />
                  <img className="pill-badge" loading="lazy" alt="Gunicorn" src="https://img.shields.io/badge/-Gunicorn-499848.svg?logo=gunicorn&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Pytest" src="https://img.shields.io/badge/Pytest-0A9EDC.svg?logo=pytest&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Jupyter" src="https://img.shields.io/badge/Jupyter-F37626.svg?logo=Jupyter&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="PySpark" src="https://img.shields.io/badge/PySpark-E25A1C.svg?logo=apachespark&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Selenium" src="https://img.shields.io/badge/Selenium-43B02A.svg?logo=selenium&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Playwright" src="https://img.shields.io/badge/Playwright-2EAD33.svg?logo=playwright&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Java, Spring &amp; Related Libraries</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="Java" src="https://custom-icon-badges.demolab.com/badge/Java-007396.svg?logo=java&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Spring Boot" src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?logo=springboot&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Groovy" src="https://custom-icon-badges.demolab.com/badge/Groovy-4298B8.svg?logo=apachegroovy&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="JUnit" src="https://custom-icon-badges.demolab.com/badge/JUnit-25A162.svg?logo=check-circle&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Web: React, JS, TS &amp; Related</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black" />
                  <img className="pill-badge" loading="lazy" alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="React" src="https://img.shields.io/badge/React-20232a.svg?logo=react&logoColor=%2361DAFB" />
                  <img className="pill-badge" loading="lazy" alt="Next.js" src="https://img.shields.io/badge/Next.js-000000.svg?logo=nextdotjs&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?logo=tailwindcss&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D.svg?logo=node.js&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="CSS" src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3.svg?logo=bootstrap&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Express.js" src="https://img.shields.io/badge/Express.js-404d59.svg?logo=express&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Electron" src="https://img.shields.io/badge/Electron-20232e.svg?logo=electron&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Material Design" src="https://img.shields.io/badge/Material%20Design-0081CB.svg?logo=material-design&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Data &amp; Markup Formats</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?logo=markdown&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?logo=json&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="CSV" src="https://img.shields.io/badge/CSV-237346.svg" />
                  <img className="pill-badge" loading="lazy" alt="XML" src="https://img.shields.io/badge/XML-005FAD.svg" />
                  <img className="pill-badge" loading="lazy" alt="Parquet" src="https://img.shields.io/badge/Parquet-50ABF1.svg?logo=apacheparquet&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="ORC" src="https://img.shields.io/badge/ORC-2E2E2E.svg?logo=apache&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="SVG" src="https://img.shields.io/badge/SVG-e0982c.svg?logo=svg&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="LaTeX" src="https://img.shields.io/badge/LaTeX-008080.svg?logo=LaTeX&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="reStructuredText" src="https://img.shields.io/badge/reStructuredText-3a4148.svg?logo=readthedocs&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Databases &amp; Cloud Hosting</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="SQL" src="https://custom-icon-badges.demolab.com/badge/SQL-025E8C.svg?logo=database&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4ea94b.svg?logo=mongodb&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="MySQL" src="https://img.shields.io/badge/MySQL-00f.svg?logo=mysql&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Oracle" src="https://img.shields.io/badge/Oracle-F00000.svg?logo=oracle&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192.svg?logo=postgresql&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="SQL Server" src="https://img.shields.io/badge/SQL%20Server-CC2927.svg?logo=microsoftsqlserver&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Redshift" src="https://img.shields.io/badge/Redshift-8C4FFF.svg?logo=amazonredshift&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Iceberg" src="https://img.shields.io/badge/Iceberg-0468FF.svg?logo=apache&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Delta Lake" src="https://img.shields.io/badge/Delta%20Lake-FF3621.svg?logo=databricks&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Athena" src="https://img.shields.io/badge/Athena-232F3E.svg?logo=amazonaws&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="SQLite" src="https://img.shields.io/badge/SQLite-07405e.svg?logo=sqlite&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="AWS" src="https://img.shields.io/badge/AWS-232F3E.svg?logo=amazonaws&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Snowflake" src="https://img.shields.io/badge/Snowflake-29B5E8.svg?logo=snowflake&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Azure" src="https://img.shields.io/badge/Azure-0078D4.svg?logo=microsoftazure&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Databricks" src="https://img.shields.io/badge/Databricks-FF3621.svg?logo=databricks&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="dbt" src="https://img.shields.io/badge/dbt-FF694B.svg?logo=dbt&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Render" src="https://img.shields.io/badge/Render-00979D.svg?logo=render&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Repl.it" src="https://img.shields.io/badge/Repl.it-0D101E.svg?logo=Replit&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Vercel" src="https://img.shields.io/badge/Vercel-000000.svg?logo=vercel&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-327FC7.svg?logo=github&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098.svg?logo=heroku&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Other Languages, Software &amp; Tools</p>
                <div className="pill-row badge-row">
                  <img className="pill-badge" loading="lazy" alt="Bash" src="https://img.shields.io/badge/Bash-121011.svg?logo=gnu-bash&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Scratch" src="https://img.shields.io/badge/Scratch-4D97FF.svg?logo=scratch&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Notion" src="https://img.shields.io/badge/Notion-010101.svg?logo=notion&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2671E5.svg?logo=github%20actions&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Android" src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Android Studio" src="https://img.shields.io/badge/Android%20Studio-008678.svg?logo=android-studio&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Audacity" src="https://img.shields.io/badge/-Audacity-0000CC?logo=audacity&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Brave" src="https://img.shields.io/badge/-Brave-FB542B?logo=brave&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Chrome" src="https://img.shields.io/badge/-Chrome-4285F4?logo=googlechrome&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="DBeaver" src="https://custom-icon-badges.demolab.com/badge/-Dbeaver-372923?logo=dbeaver-mono&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Discord" src="https://img.shields.io/badge/-Discord-5865F2.svg?logo=discord&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Git" src="https://img.shields.io/badge/Git-F05033.svg?logo=git&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Google Sheets" src="https://img.shields.io/badge/Sheets-34A853.svg?logo=google%20sheets&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Inkscape" src="https://img.shields.io/badge/Inkscape-000000?logo=Inkscape&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="OBS Studio" src="https://img.shields.io/badge/-OBS-302E31?logo=obs-studio&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="SonarLint" src="https://img.shields.io/badge/-SonarLint-CB2029?logo=sonarlint&logoColor=white" />
                  <img className="pill-badge" loading="lazy" alt="Stack Overflow" src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white" />
                </div>
              </div>
              <div>
                <p className="pill-group-label">Abilities</p>
                <div className="pill-row">
                  <span className="pill">Data Pipeline Architecture</span><span className="pill">Agentic System Design</span>
                  <span className="pill">Process Mining &amp; Automation</span><span className="pill">Cost Modeling &amp; ROI</span>
                  <span className="pill">CRM &amp; Campaign Management</span><span className="pill">Team Leadership</span><span className="pill">Client Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
