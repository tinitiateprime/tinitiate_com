import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Diagram from '../../../components/Diagram';
import { diagramSpec, nodeDetails } from './spec';
import '../diagram.css';
import './style.css';

export const metadata = {
  title: 'Databricks ELT — S3 Landing Zone to Snowflake Analytics | Tinitiate',
  description: 'End-to-end ELT pipeline: internal ERP/Oracle systems land in an S3 zone, Databricks validates and cleanses for MDM, Snowflake serves analytics to Power BI and GenAI agents — orchestrated by AWS MWAA.',
  openGraph: {
    title: 'Databricks ELT — S3 Landing Zone to Snowflake Analytics | Tinitiate',
    description: 'End-to-end ELT pipeline: internal ERP/Oracle systems land in an S3 zone, Databricks validates and cleanses for MDM, Snowflake serves analytics to Power BI and GenAI agents — orchestrated by AWS MWAA.',
    images: ['/images/tinitiate-logo.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const legend = (
  <div className="legend" aria-hidden="true">
    <span><i className="blue"></i> Orchestration &amp; core processing</span>
    <span><i className="marigold"></i> Validation &amp; MDM gate</span>
    <span><i className="green"></i> Data lake / stage handoff</span>
    <span><i></i> Source, target &amp; consumption systems</span>
  </div>
);

export default function DatabricksShowcasePage() {
  return (
    <>
      <Header current="showcases" />
      <div className="showcase-scope">
        <main className="wrap">

          {/* ════════════════════════════════════════════════════════════
               HERO
               ════════════════════════════════════════════════════════════ */}
          <section className="hero">
            <p className="hero-eyebrow">Tinitiate Data Engineering</p>
            <h1>Databricks ELT:<br /><span className="highlight">S3 Landing Zone &rarr; Snowflake Analytics</span></h1>
            <p className="hero-sub">
              Internal operational systems (ERP, Oracle DB) land raw in an AWS S3 zone. Databricks
              validates records against master data management rules, cleanses and standardizes them,
              then loads a Snowflake stage. Snowflake merges the stage into analytical tables that feed
              Power BI reporting and GenAI chat agents &mdash; the whole pipeline orchestrated end-to-end
              by AWS MWAA.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><span className="num">3</span><span className="lbl">Source Systems</span></div>
              <div className="hero-stat"><span className="num">3</span><span className="lbl">Databricks Stages</span></div>
              <div className="hero-stat"><span className="num">2</span><span className="lbl">Consumption Channels</span></div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
               DIAGRAM
               ════════════════════════════════════════════════════════════ */}
          <section className="page-head">
            <p className="eyebrow">ETL Pipeline Diagram</p>
            <h2 className="section-title">1. S3 Landing Zone &rarr; Databricks &rarr; Snowflake</h2>
            <ul className="lede-list">
              <li><strong>Source</strong> &mdash; internal operational systems: ERP and Oracle DB (systems A1, A2, A3)</li>
              <li><strong>Landing</strong> &mdash; raw records land in an AWS S3 landing zone</li>
              <li><strong>Transform</strong> &mdash; Databricks validates for MDM, cleanses &amp; standardizes, then loads a Snowflake stage</li>
              <li><strong>Target</strong> &mdash; Snowflake analytical DB tables, served to Power BI reporting and GenAI chat agents</li>
              <li><strong>Orchestration</strong> &mdash; AWS MWAA (Managed Workflows for Apache Airflow) schedules and triggers every stage</li>
            </ul>
          </section>

          <section className="stage">
            <div className="stage-card">
              <Diagram
                spec={diagramSpec}
                nodeDetails={nodeDetails}
                stageTitle="Databricks ELT — S3 to Snowflake"
                legend={legend}
              />

              {/* Diagram Footer */}
              <footer className="diagram-footer">
                <p>
                  &copy; Venkata Bhattaram
                  <span className="sep">|</span>
                  <a href="https://www.linkedin.com/in/venkata-bhattaram/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <span className="sep">|</span>
                  <a href="mailto:contact@tinitiate.com">contact@tinitiate.com</a>
                </p>
              </footer>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
               PIPELINE STEPS
               ════════════════════════════════════════════════════════════ */}
          <section className="page-head">
            <p className="eyebrow">Pipeline Walkthrough</p>
            <h2 className="section-title">How the data flows</h2>
          </section>
          <div className="pipeline-steps">
            <div className="pipeline-step">
              <div className="step-num">Step 01</div>
              <h4>Extract from Source Systems</h4>
              <p>ERP and Oracle DB &mdash; the internal operational systems of record (A1, A2, A3) &mdash; are extracted on a scheduled batch interval triggered by AWS MWAA.</p>
              <span className="tech-tag">ERP + Oracle DB</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 02</div>
              <h4>Land in S3</h4>
              <p>Raw extracts are written untouched into an AWS S3 landing zone, preserving an immutable copy of source data before any transformation happens.</p>
              <span className="tech-tag">Amazon S3</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 03</div>
              <h4>Validate for MDM</h4>
              <p>A Databricks job checks incoming records against master data management rules &mdash; identity resolution, required fields, and reference-data integrity &mdash; before anything moves downstream.</p>
              <span className="tech-tag">Databricks</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 04</div>
              <h4>Cleanse &amp; Standardize</h4>
              <p>Validated records are cleansed and standardized &mdash; consistent formats, types, and naming &mdash; so every downstream table follows the same conventions regardless of source system.</p>
              <span className="tech-tag">Databricks + Spark</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 05</div>
              <h4>Load to Snowflake Stage</h4>
              <p>Cleansed output is written into a Snowflake internal stage, ready for a bulk COPY INTO load without re-touching the Databricks cluster.</p>
              <span className="tech-tag">Snowflake Stage</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 06</div>
              <h4>Load Command to Analytical Tables</h4>
              <p>A Snowflake LOAD command merges the staged data into the analytical DB tables that power reporting and AI consumption.</p>
              <span className="tech-tag">Snowflake SQL</span>
            </div>
            <div className="pipeline-step">
              <div className="step-num">Step 07</div>
              <h4>Serve Power BI &amp; GenAI Agents</h4>
              <p>Analytical tables feed Power BI dashboards for human reporting and GenAI chat agents for natural-language, self-service access to the same data.</p>
              <span className="tech-tag">Power BI + GenAI</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════
               TECHNOLOGY STACK
               ════════════════════════════════════════════════════════════ */}
          <section className="tech-grid-section">
            <div className="page-head" style={{ paddingBottom: 0 }}>
              <p className="eyebrow">Technology Stack</p>
              <h2 className="section-title">Skills &amp; services powering the pipeline</h2>
            </div>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#161B25', borderRadius: 4 }}></div>
                <h5>ERP System</h5>
                <div className="tech-role">Internal operational source</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#F80000', borderRadius: 4 }}></div>
                <h5>Oracle DB</h5>
                <div className="tech-role">Internal operational source</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#FF9900', borderRadius: 4 }}></div>
                <h5>Amazon S3</h5>
                <div className="tech-role">Landing zone storage</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#FF3621', borderRadius: 4 }}></div>
                <h5>Databricks</h5>
                <div className="tech-role">MDM validation &amp; cleansing</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#29B5E8', borderRadius: 4 }}></div>
                <h5>Snowflake</h5>
                <div className="tech-role">Analytical DB tables</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#017CEE', borderRadius: 4 }}></div>
                <h5>AWS MWAA</h5>
                <div className="tech-role">Orchestration (Airflow)</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#F2C811', borderRadius: 4 }}></div>
                <h5>Power BI</h5>
                <div className="tech-role">Business reporting</div>
              </div>
              <div className="tech-card">
                <div className="tech-icon" style={{ background: '#1E4DB7', borderRadius: 4 }}></div>
                <h5>GenAI Agents</h5>
                <div className="tech-role">Conversational analytics</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
               ARCHITECTURE INSIGHTS
               ════════════════════════════════════════════════════════════ */}
          <section className="insight-section">
            <div className="page-head" style={{ paddingBottom: 0 }}>
              <p className="eyebrow">Architecture Insights</p>
              <h2 className="section-title">Why this approach works</h2>
            </div>
            <div className="insight-grid">
              <div className="insight-card">
                <div className="insight-icon">&nbsp;&#128230;</div>
                <h4>One Landing Zone, Many Sources</h4>
                <p>ERP and Oracle DB both land in the same S3 zone in their raw form, so new internal systems can be onboarded without changing the transformation layer.</p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">&nbsp;&#9989;</div>
                <h4>MDM Gate Before Anything Downstream</h4>
                <p>Validation runs before cleansing and load, so bad or unresolved records are caught at the earliest possible point instead of polluting analytical tables.</p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">&nbsp;&#10024;</div>
                <h4>ELT, Not ETL</h4>
                <p>Databricks handles validation and standardization, then hands off to Snowflake&#8217;s own compute for the final load and merge &mdash; each engine does the part it&#8217;s best at.</p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">&nbsp;&#128257;</div>
                <h4>Orchestrated End-to-End with MWAA</h4>
                <p>A single AWS MWAA DAG schedules extraction, triggers the Databricks job, and fires the Snowflake load command &mdash; one source of truth for pipeline timing and retries.</p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
               PAGE FOOTER
               ════════════════════════════════════════════════════════════ */}
          <footer className="page-footer">
            <p>
              &copy; 2026 Venkata Bhattaram &mdash; Tinitiate Data Engineering
              &nbsp;&middot;&nbsp;
              <a href="https://www.linkedin.com/in/venkata-bhattaram/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              &nbsp;&middot;&nbsp;
              <a href="mailto:contact@tinitiate.com">contact@tinitiate.com</a>
            </p>
          </footer>

        </main>
      </div>
      <Footer />
    </>
  );
}
