export const diagramSpec = {
  width: 1080,
  height: 760,
  title: 'Databricks ELT — S3 landing zone to Snowflake analytics, orchestrated by AWS MWAA',
  nodes: [
    { id: 'mwaa', x: 190, y: 20, w: 700, h: 56, label: ['AWS MWAA — Orchestration'], accent: 'blue', icon: '/images/icons/apache-airflow.svg', iconSize: 22 },

    { id: 'erp', x: 20, y: 120, w: 330, h: 64, label: ['ERP System', '(A1)'], icon: '/images/icons/erp.svg', iconSize: 22 },
    { id: 'ora2', x: 375, y: 120, w: 330, h: 64, label: ['Oracle DB', '(A2)'], icon: '/images/icons/oracle.svg', iconSize: 22 },
    { id: 'ora3', x: 730, y: 120, w: 330, h: 64, label: ['Oracle DB', '(A3)'], icon: '/images/icons/oracle.svg', iconSize: 22 },

    { id: 's3land', x: 400, y: 225, w: 280, h: 70, label: ['S3 Landing Zone'], icon: '/images/icons/Amazon-S3.svg', iconSize: 26 },

    { id: 'db_validate', x: 20, y: 360, w: 330, h: 76, label: ['Data Validation', '(MDM)'], accent: 'marigold', plain: true, icon: '/images/icons/databricks.svg', iconSize: 24 },
    { id: 'db_cleanse', x: 375, y: 360, w: 330, h: 76, label: ['Cleansing &', 'Standardization'], accent: 'blue', plain: true, icon: '/images/icons/databricks.svg', iconSize: 24 },
    { id: 'db_load', x: 730, y: 360, w: 330, h: 76, label: ['Load to', 'Snowflake Stage'], accent: 'green', plain: true, icon: '/images/icons/databricks.svg', iconSize: 24 },

    { id: 'sf_stage', x: 20, y: 510, w: 330, h: 76, label: ['Snowflake Stage'], plain: true, icon: '/images/icons/snowflake.svg', iconSize: 24 },
    { id: 'sf_loadcmd', x: 375, y: 510, w: 330, h: 76, label: ['LOAD Command', '→ Analytics'], accent: 'blue', plain: true, icon: '/images/icons/snowflake.svg', iconSize: 24 },
    { id: 'sf_analytics', x: 730, y: 510, w: 330, h: 76, label: ['Analytical DB', 'Tables'], plain: true, icon: '/images/icons/snowflake.svg', iconSize: 24 },

    { id: 'powerbi', x: 190, y: 650, w: 330, h: 70, label: ['Power BI', 'Reporting'], icon: '/images/icons/powerbi.svg', iconSize: 22 },
    { id: 'genai', x: 560, y: 650, w: 330, h: 70, label: ['GenAI Agents', 'Chat'], icon: '/images/icons/genai-agent.svg', iconSize: 22 },
  ],
  groups: [
    { id: 'g-src', label: 'Internal Operational Systems', nodes: ['erp', 'ora2', 'ora3'] },
    { id: 'g-db', label: 'Databricks — Data Engineering', nodes: ['db_validate', 'db_cleanse', 'db_load'] },
    { id: 'g-sf', label: 'Snowflake — Analytics DB', nodes: ['sf_stage', 'sf_loadcmd', 'sf_analytics'] },
    { id: 'g-consume', label: 'Consumption Layer', nodes: ['powerbi', 'genai'] },
  ],
  edges: [
    { from: 'erp', to: 's3land', label: 'extract' },
    { from: 'ora2', to: 's3land', label: 'extract' },
    { from: 'ora3', to: 's3land', label: 'extract' },
    { from: 's3land', to: 'db_validate', label: 'raw ingest' },
    { from: 'db_validate', to: 'db_cleanse', label: 'validated' },
    { from: 'db_cleanse', to: 'db_load', label: 'standardized' },
    { from: 'db_load', to: 'sf_stage', label: 'COPY INTO' },
    { from: 'sf_stage', to: 'sf_loadcmd', label: 'stage data' },
    { from: 'sf_loadcmd', to: 'sf_analytics', label: 'MERGE' },
    { from: 'sf_analytics', to: 'powerbi', label: 'semantic model' },
    { from: 'sf_analytics', to: 'genai', label: 'SQL / RAG' },
  ],
};

export const nodeDetails = {
  erp: 'ERP system (internal operational system A1) — the source of finance, inventory, and operations records that feed the pipeline.',
  ora2: 'Oracle DB (internal operational system A2) — a transactional database extracted on the same MWAA-triggered batch schedule as the other sources.',
  ora3: 'Oracle DB (internal operational system A3) — a second Oracle instance, extracted alongside A2 and the ERP system into the same landing zone.',
  s3land: 'AWS S3 landing zone: raw, untouched extracts from ERP and Oracle DB are written here first, giving the pipeline an immutable copy of source data before any transformation.',
  db_validate: 'Databricks job, step 1: validates incoming records against master data management (MDM) rules — identity resolution, required fields, reference-data integrity — before anything moves downstream.',
  db_cleanse: 'Databricks job, step 2: cleanses and standardizes validated records into consistent formats, types, and naming conventions.',
  db_load: 'Databricks job, step 3: writes the cleansed, standardized output into a Snowflake internal stage, ready for a bulk load.',
  sf_stage: 'Snowflake internal stage — holds the Databricks output ready for a COPY INTO / LOAD command, decoupling the Databricks cluster from the final load.',
  sf_loadcmd: 'Snowflake LOAD command merges the staged data into the analytical DB tables — triggered by the same AWS MWAA DAG that scheduled the upstream steps.',
  sf_analytics: 'Snowflake analytical DB tables — the queryable, governed layer that both Power BI and GenAI agents read from.',
  powerbi: 'Power BI connects to the Snowflake analytical tables for scheduled dashboards and ad-hoc business reporting.',
  genai: 'GenAI chat agents query the same analytical tables through natural-language / RAG interfaces, giving business users self-service access without writing SQL.',
  mwaa: 'AWS MWAA (Managed Workflows for Apache Airflow) orchestrates the whole pipeline — one DAG schedules extraction, triggers the Databricks validation/cleansing job, and fires the Snowflake load command.',
};
