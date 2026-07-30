import DirectorHeader from '../../../components/director/DirectorHeader';
import Footer from '../../../components/Footer';
import SkillCard from '../../../components/director/SkillCard';
import {
  IconCylinder,
  IconDownload,
  IconTriNetwork,
  IconHouse,
  IconWave,
  IconShieldCheck,
  IconDoubleChevron,
  IconGauge,
  IconDashedSquare,
  IconHub,
  IconBell,
  IconRefresh,
} from '../../../components/director/GroupIcons';
import '../director-enterprise.css';

export const metadata = {
  title: 'Venkata Bhattaram — Enterprise Services',
  description: 'Venkata Bhattaram — cloud migrations & multi-cloud governance, cloud & lakehouse data engineering across AWS, Azure, Databricks and Snowflake, and AI/ML automation & agentic engineering.',
  openGraph: {
    title: 'Venkata Bhattaram — Enterprise Services',
    description: 'Cloud migrations, multi-cloud governance, cloud & lakehouse data engineering, and AI/ML automation & agentic engineering.',
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

export default function EnterpriseServicesPage() {
  return (
    <>
      <DirectorHeader current="enterprise" />

      <main id="top">

        {/* CLOUD MIGRATIONS */}
        <section className="skills" id="cloud">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">01 / Cloud &amp; multi-cloud</p>
              <h2 className="section-title">Cloud migrations &amp; multi-cloud governance</h2>
              <p className="section-sub">Two pillars I use to move workloads to the cloud and keep them governed once they&apos;re there — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="migrate"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="4" y="14" width="12" height="12" rx="2" strokeWidth="1.4" />
                    <rect x="24" y="14" width="12" height="12" rx="2" strokeWidth="1.4" />
                    <path d="M17 20h6M20.5 17l3 3-3 3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <rect x="4" y="14" width="12" height="12" rx="2" strokeWidth="2" />
                    <rect x="24" y="14" width="12" height="12" rx="2" strokeWidth="2" />
                    <path d="M17 20h6M20.5 17l3 3-3 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                title="Migration & Refactoring"
                description="Code refactoring, data migration, phased cutover"
              >
                <Group icon={<IconCylinder />} label="Migration strategy" tools={['Lift-and-shift', 'Replatforming', 'Refactor & re-architect']} />
                <Group icon={<IconDownload />} label="Data migration" tools={['CDC replication', 'ETL / ELT migration', 'Schema conversion']} />
                <Group icon={<IconTriNetwork />} label="Cutover & rollout" tools={['Phased cutover', 'Zero-downtime rollout', 'Blue/green deployments']} />
                <Group icon={<IconDoubleChevron />} label="Risk & validation" tools={['Data reconciliation', 'Rollback planning']} />
                <Group icon={<IconGauge />} label="Cost" tools={['TCO comparison', 'Right-sizing']} />
                <Group icon={<IconShieldCheck />} label="Compliance" tools={['Compliance-ready migration', 'Audit trails']} />
              </SkillCard>

              <SkillCard
                platform="landingzone"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M20 4l13 4.75v9.5c0 9.5-5.5 15.25-13 16.75-7.5-1.5-13-7.25-13-16.75v-9.5Z" strokeWidth="1.4" />
                    <path d="M13.5 20.25l4.25 4.25 7.75-8.25" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M20 4l13 4.75v9.5c0 9.5-5.5 15.25-13 16.75-7.5-1.5-13-7.25-13-16.75v-9.5Z" strokeWidth="2" />
                    <path d="M13.5 20.25l4.25 4.25 7.75-8.25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                title="Landing Zones & Multi-Cloud Governance"
                description="AWS & Azure landing zones, IAM, cost governance"
              >
                <Group icon={<IconDashedSquare />} label="Landing zones" tools={['AWS Control Tower', 'Azure Landing Zones']} />
                <Group icon={<IconShieldCheck />} label="Identity & access" tools={['IAM / Azure AD', 'RBAC design']} />
                <Group icon={<IconHouse />} label="Data governance" tools={['Data classification & cataloging', 'Access policies & stewardship', 'GDPR / CCPA / HIPAA compliance']} />
                <Group icon={<IconGauge />} label="Cost governance" tools={['Tagging strategy', 'Budget alerts & FinOps']} />
                <Group icon={<IconHub />} label="Multi-cloud" tools={['AWS + Azure interoperability', 'Cross-cloud DR']} />
                <Group icon={<IconWave />} label="Data lineage" tools={['End-to-end lineage tracking', 'Impact analysis', 'Metadata management (Glue Data Catalog / Purview / OpenLineage)']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* DATA ENGINEERING */}
        <section className="skills" id="dataeng">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">02 / Core platforms</p>
              <h2 className="section-title">Cloud &amp; lakehouse data engineering</h2>
              <p className="section-sub">Four platforms I build production data pipelines on — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="aws"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M20 4 L34 11 L34 29 L20 36 L6 29 L6 11 Z" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M20 4 L20 20 M20 20 L34 11 M20 20 L6 11 M20 20 L20 36" strokeWidth="1" opacity=".55" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M20 4 L34 11 L34 29 L20 36 L6 29 L6 11 Z" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M20 4 L20 20 M20 20 L34 11 M20 20 L6 11 M20 20 L20 36" strokeWidth="1.3" opacity=".7" />
                  </svg>
                )}
                title="AWS"
                description="Glue, EMR, Redshift, MWAA, Kinesis"
              >
                <Group icon={<IconCylinder />} label="Storage & lakehouse" tools={['S3', 'Lake Formation', 'Parquet / Iceberg']} />
                <Group icon={<IconDownload />} label="Ingestion & ETL" tools={['Glue Jobs', 'Glue Crawlers & Data Catalog', 'EMR (Spark / Hive)', 'Lambda']} />
                <Group icon={<IconTriNetwork />} label="Orchestration" tools={['MWAA (Managed Airflow)', 'Step Functions']} />
                <Group icon={<IconHouse />} label="Warehousing & query" tools={['Redshift', 'Redshift Spectrum', 'Athena']} />
                <Group icon={<IconWave />} label="Streaming" tools={['Kinesis Data Streams', 'Kinesis Firehose', 'MSK (Kafka)']} />
                <Group icon={<IconShieldCheck />} label="Governance & security" tools={['IAM', 'KMS', 'Lake Formation permissions']} />
              </SkillCard>

              <SkillCard
                platform="azure"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
                    <path d="M10 32 L18 8 L26 8 L15 32 Z" />
                    <path d="M20 32 L28 12 L34 12 L26 32 Z" opacity=".55" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M10 32 L18 8 L26 8 L15 32 Z" />
                    <path d="M20 32 L28 12 L34 12 L26 32 Z" opacity=".55" />
                  </svg>
                )}
                title="Azure"
                description="ADF, Synapse, ADLS Gen2, Event Hubs"
              >
                <Group icon={<IconCylinder />} label="Storage & lakehouse" tools={['ADLS Gen2', 'Microsoft Fabric OneLake']} />
                <Group icon={<IconDownload />} label="Ingestion & ETL" tools={['Azure Data Factory pipelines', 'Synapse Pipelines', 'Azure Databricks']} />
                <Group icon={<IconDashedSquare />} label="Compute" tools={['Databricks (Spark)', 'Synapse Spark Pools']} />
                <Group icon={<IconHouse />} label="Warehousing" tools={['Synapse Analytics (dedicated SQL pools)', 'Azure SQL Database']} />
                <Group icon={<IconWave />} label="Streaming" tools={['Event Hubs', 'Stream Analytics']} />
                <Group icon={<IconShieldCheck />} label="Governance & security" tools={['Microsoft Purview', 'Azure AD / RBAC']} />
              </SkillCard>

              <SkillCard
                platform="databricks"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
                    <path d="M20 6 C12 14 10 20 14 26 C12.5 22 14.5 18 18 16 C16.5 20 18.5 24 22 26 C20.5 22 22.5 18 24 14 C28 18 28 24 24 28 C30 26 32 20 28 14 C26 10 22 8 20 6 Z" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 6 C12 14 10 20 14 26 C12.5 22 14.5 18 18 16 C16.5 20 18.5 24 22 26 C20.5 22 22.5 18 24 14 C28 18 28 24 24 28 C30 26 32 20 28 14 C26 10 22 8 20 6 Z" />
                  </svg>
                )}
                title="Databricks"
                description="Delta Lake, Spark, Unity Catalog, DLT"
              >
                <Group icon={<IconCylinder />} label="Lakehouse core" tools={['Delta Lake', 'Unity Catalog']} />
                <Group icon={<IconDashedSquare />} label="Compute engine" tools={['Apache Spark (batch)', 'Structured Streaming', 'Photon']} />
                <Group icon={<IconTriNetwork />} label="Orchestration" tools={['Databricks Workflows', 'Delta Live Tables (DLT)']} />
                <Group icon={<IconDownload />} label="Ingestion" tools={['Auto Loader', 'COPY INTO']} />
                <Group icon={<IconBell />} label="MLOps" tools={['MLflow', 'Feature Store']} />
                <Group icon={<IconHub />} label="DevOps" tools={['Asset Bundles', 'Repos + CI/CD']} />
              </SkillCard>

              <SkillCard
                platform="snowflake"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
                    <g strokeWidth="1.6">
                      <line x1="20" y1="4" x2="20" y2="36" />
                      <line x1="6" y1="12" x2="34" y2="28" />
                      <line x1="6" y1="28" x2="34" y2="12" />
                    </g>
                    <g strokeWidth="1.3">
                      <line x1="20" y1="10" x2="14.5" y2="13.5" /><line x1="20" y1="10" x2="25.5" y2="13.5" />
                      <line x1="20" y1="30" x2="14.5" y2="26.5" /><line x1="20" y1="30" x2="25.5" y2="26.5" />
                      <line x1="10" y1="14" x2="9" y2="19" /><line x1="10" y1="14" x2="14.5" y2="16.5" />
                      <line x1="30" y1="26" x2="31" y2="21" /><line x1="30" y1="26" x2="25.5" y2="23.5" />
                    </g>
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round">
                    <g strokeWidth="2.2">
                      <line x1="20" y1="4" x2="20" y2="36" />
                      <line x1="6" y1="12" x2="34" y2="28" />
                      <line x1="6" y1="28" x2="34" y2="12" />
                    </g>
                    <g strokeWidth="1.8">
                      <line x1="20" y1="10" x2="14.5" y2="13.5" /><line x1="20" y1="10" x2="25.5" y2="13.5" />
                      <line x1="20" y1="30" x2="14.5" y2="26.5" /><line x1="20" y1="30" x2="25.5" y2="26.5" />
                      <line x1="10" y1="14" x2="9" y2="19" /><line x1="10" y1="14" x2="14.5" y2="16.5" />
                      <line x1="30" y1="26" x2="31" y2="21" /><line x1="30" y1="26" x2="25.5" y2="23.5" />
                    </g>
                  </svg>
                )}
                title="Snowflake"
                description="Snowpipe, Streams & Tasks, Snowpark"
              >
                <Group icon={<IconDashedSquare />} label="Core architecture" tools={['Virtual warehouses', 'Micro-partitions', 'Multi-cluster scaling']} />
                <Group icon={<IconDownload />} label="Ingestion" tools={['Snowpipe', 'Snowpipe Streaming', 'External stages (S3 / ADLS / GCS)']} />
                <Group icon={<IconRefresh />} label="Transformation" tools={['Streams & Tasks', 'dbt on Snowflake']} />
                <Group icon={<IconDoubleChevron />} label="Programmability" tools={['Snowpark (Python / Java / Scala)', 'UDFs & Stored Procedures']} />
                <Group icon={<IconShieldCheck />} label="Sharing & governance" tools={['Secure Data Sharing', 'RBAC', 'Dynamic data masking', 'Time Travel']} />
                <Group icon={<IconGauge />} label="Performance & cost" tools={['Clustering keys', 'Query Profile tuning', 'Resource Monitors']} />
              </SkillCard>

            </div>
          </div>
        </section>

        {/* AI/ML AUTOMATION & AGENTIC */}
        <section className="skills" id="aiml">
          <div className="wrap">
            <div className="skills-head">
              <p className="eyebrow">03 / Core capabilities</p>
              <h2 className="section-title">AI, ML automation &amp; agentic engineering</h2>
              <p className="section-sub">Four pillars I use to design, orchestrate, and ship production LLM and agentic systems — tap a card to expand on mobile; every detail is already open on desktop.</p>
            </div>

            <div className="skill-grid">

              <SkillCard
                platform="llm"
                defaultOpen
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M20 4 L34 11 L34 29 L20 36 L6 29 L6 11 Z" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="20" cy="20" r="3" strokeWidth="1.2" />
                    <path d="M20 20L20 6 M20 20L32 12.5 M20 20L32 27.5 M20 20L20 34 M20 20L8 27.5 M20 20L8 12.5" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M20 4 L34 11 L34 29 L20 36 L6 29 L6 11 Z" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="20" cy="20" r="3.2" strokeWidth="1.6" />
                    <path d="M20 20L20 6 M20 20L32 12.5 M20 20L32 27.5 M20 20L20 34 M20 20L8 27.5 M20 20L8 12.5" strokeWidth="1.3" opacity=".7" />
                  </svg>
                )}
                title="LLM & Model Platforms"
                description="OpenAI, Anthropic Claude, AWS Bedrock, Azure OpenAI"
              >
                <Group icon={<IconDashedSquare />} label="Frontier model APIs" tools={['OpenAI GPT-4 / GPT-5', 'Anthropic Claude', 'Google Gemini']} />
                <Group icon={<IconCylinder />} label="Cloud model hosting" tools={['AWS Bedrock', 'Azure OpenAI Service', 'Google Vertex AI']} />
                <Group icon={<IconDownload />} label="Open-weight models" tools={['Llama', 'Mistral', 'Hugging Face Transformers']} />
                <Group icon={<IconBell />} label="Fine-tuning & adaptation" tools={['LoRA / QLoRA', 'Instruction tuning', 'RLHF fundamentals']} />
                <Group icon={<IconDoubleChevron />} label="Prompt engineering" tools={['Few-shot prompting', 'Chain-of-thought', 'System prompt design']} />
                <Group icon={<IconShieldCheck />} label="Evaluation & guardrails" tools={['LLM-as-judge', 'Bedrock Guardrails', 'Content moderation']} />
              </SkillCard>

              <SkillCard
                platform="agent"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <circle cx="20" cy="8" r="4" strokeWidth="1.4" /><circle cx="8" cy="31" r="4" strokeWidth="1.4" /><circle cx="32" cy="31" r="4" strokeWidth="1.4" />
                    <path d="M20 12 L11 27 M20 12 L29 27 M12.5 31 L27.5 31" strokeWidth="1" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <circle cx="20" cy="8" r="4" strokeWidth="2" /><circle cx="8" cy="31" r="4" strokeWidth="2" /><circle cx="32" cy="31" r="4" strokeWidth="2" />
                    <path d="M20 12 L11 27 M20 12 L29 27 M12.5 31 L27.5 31" strokeWidth="1.6" />
                  </svg>
                )}
                title="Agent Frameworks & Orchestration"
                description="LangChain, LangGraph, CrewAI, AutoGen, MCP"
              >
                <Group icon={<IconTriNetwork />} label="Agent frameworks" tools={['LangChain', 'LangGraph', 'CrewAI', 'AutoGen']} />
                <Group icon={<IconDoubleChevron />} label="Protocols & interop" tools={['Model Context Protocol (MCP)', 'Function / tool calling']} />
                <Group icon={<IconHub />} label="Multi-agent patterns" tools={['Planner / executor', 'Supervisor-worker', 'Reflection loops']} />
                <Group icon={<IconDashedSquare />} label="Enterprise orchestration" tools={['AWS Bedrock Agents', 'Azure AI Foundry Agent Service', 'Semantic Kernel']} />
                <Group icon={<IconCylinder />} label="Memory & state" tools={['Vector memory', 'Conversation buffers', 'Session / state stores']} />
                <Group icon={<IconGauge />} label="Observability" tools={['LangSmith', 'Trace & cost monitoring']} />
              </SkillCard>

              <SkillCard
                platform="rag"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <ellipse cx="16" cy="10" rx="11" ry="4" strokeWidth="1.6" />
                    <path d="M5 10v13c0 2.2 4.9 4 11 4s11-1.8 11-4V10" strokeWidth="1.6" />
                    <path d="M5 16.5c0 2.2 4.9 4 11 4s11-1.8 11-4" strokeWidth="1.3" />
                    <circle cx="29" cy="29" r="6" strokeWidth="1.6" />
                    <path d="M33.2 33.2L38 38" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <ellipse cx="16" cy="10" rx="11" ry="4" strokeWidth="2" />
                    <path d="M5 10v13c0 2.2 4.9 4 11 4s11-1.8 11-4V10" strokeWidth="2" />
                    <path d="M5 16.5c0 2.2 4.9 4 11 4s11-1.8 11-4" strokeWidth="1.6" />
                    <circle cx="29" cy="29" r="6" strokeWidth="2" />
                    <path d="M33.2 33.2L38 38" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                title="RAG & Knowledge Systems"
                description="Vector search, retrieval pipelines, embeddings"
              >
                <Group icon={<IconCylinder />} label="Vector databases" tools={['Pinecone', 'pgvector', 'OpenSearch k-NN', 'FAISS']} />
                <Group icon={<IconDownload />} label="Retrieval pipelines" tools={['Chunking strategies', 'Hybrid search', 'Re-ranking']} />
                <Group icon={<IconDoubleChevron />} label="Embeddings" tools={['OpenAI / Titan / Cohere embeddings', 'Semantic search']} />
                <Group icon={<IconHouse />} label="Knowledge grounding" tools={['Document loaders', 'Metadata filtering', 'Source citations']} />
                <Group icon={<IconHub />} label="Knowledge graphs" tools={['Entity extraction', 'Graph-based retrieval']} />
                <Group icon={<IconWave />} label="Data freshness" tools={['Incremental indexing', 'Sync pipelines']} />
              </SkillCard>

              <SkillCard
                platform="automation"
                watermark={(
                  <svg className="skill-watermark" viewBox="0 0 40 40" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M8 21a13 13 0 0122-8.5" strokeWidth="1.6" />
                    <path d="M28.5 9.5l3-1.2 1.2 3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33 20a13 13 0 01-22 8.5" strokeWidth="1.6" />
                    <path d="M12.5 31.5l-3 1.2-1.2-3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                icon={(
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    <path d="M8 21a13 13 0 0122-8.5" strokeWidth="2" />
                    <path d="M28.5 9.5l3-1.2 1.2 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33 20a13 13 0 01-22 8.5" strokeWidth="2" />
                    <path d="M12.5 31.5l-3 1.2-1.2-3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                title="Automation & Workflow Integration"
                description="RPA, low-code orchestration, event-driven ops"
              >
                <Group icon={<IconDashedSquare />} label="RPA" tools={['UiPath', 'Automation Anywhere', 'Power Automate']} />
                <Group icon={<IconTriNetwork />} label="Low-code orchestration" tools={['n8n', 'Zapier', 'Make']} />
                <Group icon={<IconWave />} label="API & event integration" tools={['REST / webhooks', 'Event-driven triggers', 'SQS / Service Bus']} />
                <Group icon={<IconShieldCheck />} label="Human-in-the-loop" tools={['Approval workflows', 'Escalation routing']} />
                <Group icon={<IconHouse />} label="Conversational interfaces" tools={['Slack / Teams bots', 'Voice / IVR automation']} />
                <Group icon={<IconGauge />} label="Monitoring & reliability" tools={['Retry / backoff', 'Alerting', 'SLA tracking']} />
              </SkillCard>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
