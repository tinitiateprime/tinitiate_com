



"use client";

import Image from "next/image";
import Link from "next/link";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiDocker,
  SiKubernetes,
  SiGit,
  SiSpring,
  SiHibernate,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJenkins,
  SiGithubactions,
  SiBootstrap,
  SiNodedotjs,
  SiGitlab,
  SiCircleci,
  SiBitbucket,
  SiNetlify,
  SiVercel,
  SiAwsamplify,
  SiGooglecloud,
  SiSnowflake,
  SiPython,
  SiApacheairflow,
  SiApachekafka,
  SiTerraform,
  SiApachespark,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import {
  FiArrowRight,
  FiPhone,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiTool,
  FiSearch,
  FiActivity,
  FiBarChart2,
  FiZap,
  FiGitBranch,
  FiFileText,
} from "react-icons/fi";

import { SiDatabricks } from "react-icons/si";

// -------------------- HERO --------------------
const HERO = {
  title: "Professional Training",
  subtitle:
    "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
  badge: "Professional Training • TINITIATE",
};

// =====================================================================================
// TECH STACK REGISTRY (ICON FIRST + IMAGE FALLBACK)
// =====================================================================================
const STACK_TECH = {
  // Frontend
  html: { name: "HTML5", Icon: SiHtml5, color: "text-orange-600" },
  css: { name: "CSS3", Icon: SiCss3, color: "text-blue-600" },
  js: { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
  ts: { name: "TypeScript", Icon: SiTypescript, color: "text-sky-600" },
  react: { name: "React", Icon: SiReact, color: "text-cyan-600" },
  next: { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900" },
  angular: { name: "Angular", Icon: SiAngular, color: "text-red-600" },
  bootstrap: { name: "Bootstrap", Icon: SiBootstrap, color: "text-violet-700" },

  // Backend (Web)
  node: { name: "Node.js", Icon: SiNodedotjs, color: "text-green-700" },

  // Backend (Java Full Stack)
  java: { name: "Java", Icon: FiCpu, color: "text-red-600" },
  springboot: { name: "Spring Boot", Icon: SiSpring, color: "text-green-700" },
  spring: { name: "Spring", Icon: SiSpring, color: "text-green-700" },
  hibernate: { name: "Hibernate / JPA", Icon: SiHibernate, color: "text-amber-700" },

  // Database
  postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "text-indigo-700" },
  mysql: { name: "MySQL Server", Icon: SiMysql, color: "text-blue-700" },
  mongo: { name: "MongoDB", Icon: SiMongodb, color: "text-green-700" },

  // Cloud / Hosting
  aws: { name: "AWS", Icon: FaAws, color: "text-orange-600" },
  gcp: { name: "Google Cloud", Icon: SiGooglecloud, color: "text-blue-600" },

  // Azure as image
  azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png" },

  amplify: { name: "AWS Amplify", Icon: SiAwsamplify, color: "text-orange-600" },
  netlify: { name: "Netlify", Icon: SiNetlify, color: "text-cyan-700" },
  vercel: { name: "Vercel", Icon: SiVercel, color: "text-gray-900" },

  // CI/CD
  git: { name: "Git", Icon: SiGit, color: "text-orange-600" },
  gha: { name: "GitHub Actions", Icon: SiGithubactions, color: "text-gray-900" },
  gitlab: { name: "GitLab CI/CD", Icon: SiGitlab, color: "text-orange-600" },
  circleci: { name: "CircleCI", Icon: SiCircleci, color: "text-gray-900" },

  azuredevops: { name: "Azure DevOps", Icon: VscAzureDevops, img: "/images/courses/azureDevOps.png" },

  bitbucket: { name: "Bitbucket Pipelines", Icon: SiBitbucket, color: "text-blue-700" },
  jenkins: { name: "Jenkins", Icon: SiJenkins, color: "text-red-700" },
  docker: { name: "Docker", Icon: SiDocker, color: "text-sky-600" },
  k8s: { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-600" },

  // Data Eng
  snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600" },
  python: { name: "Python", Icon: SiPython, color: "text-yellow-500" },
  airflow: { name: "Apache Airflow", Icon: SiApacheairflow, color: "text-sky-600" },
  kafka: { name: "Apache Kafka", Icon: SiApachekafka, color: "text-gray-900" },
  terraform: { name: "Terraform", Icon: SiTerraform, color: "text-purple-700" },
  spark: { name: "Apache Spark", Icon: SiApachespark, color: "text-orange-600" },
  pyspark: { name: "PySpark", Icon: SiApachespark, color: "text-orange-600" },

  // Formats
  csv: { name: "CSV", Icon: FiFileText, color: "text-slate-700" },
  json: { name: "JSON", Icon: FiFileText, color: "text-slate-700" },
  xml: { name: "XML", Icon: FiFileText, color: "text-slate-700" },
  parquet: { name: "Parquet", Icon: FiFileText, color: "text-slate-700" },
  avro: { name: "Avro", Icon: FiFileText, color: "text-slate-700" },

  // AWS services
  s3: { name: "Amazon S3", Icon: FiLayers, color: "text-slate-800" },
  glue: { name: "AWS Glue", Icon: FiTool, color: "text-slate-800" },
  emr: { name: "AWS EMR", Icon: FiCpu, color: "text-slate-800" },
  athena: { name: "Amazon Athena", Icon: FiSearch, color: "text-slate-800" },
  kinesis: { name: "Amazon Kinesis", Icon: FiActivity, color: "text-slate-800" },
  redshift: { name: "Amazon Redshift", Icon: FiBarChart2, color: "text-slate-800" },

  // Extras
  sql: { name: "SQL", Icon: FiDatabase, color: "text-slate-800" },
  rds: { name: "Amazon RDS", Icon: FiDatabase, color: "text-slate-800" },
  lambda: { name: "AWS Lambda", Icon: FiZap, color: "text-slate-800" },
  stepfunctions: { name: "Step Functions", Icon: FiGitBranch, color: "text-slate-800" },

  snowpark: { name: "Snowpark", Icon: "none", img: "/images/courses/snowpark.png" },
  snowpipe: { name: "Snowpipe", Icon: "none", img: "/images/courses/snowpipe.png" },

  // Azure DE
  adls: { name: "ADLS Gen2", Icon: FiLayers, color: "text-slate-800" },
  adf: { name: "Azure Data Factory", Icon: FiTool, color: "text-slate-800" },
  databricks: { name: "Azure Databricks", Icon: SiDatabricks, color: "text-red-600" },
  synapse: { name: "Azure Synapse", Icon: FiDatabase, color: "text-slate-800" },
  eventhubs: { name: "Azure Event Hubs", Icon: FiActivity, color: "text-slate-800" },
  streamanalytics: { name: "Azure Stream Analytics", Icon: FiBarChart2, color: "text-slate-800" },
  functions: { name: "Azure Functions", Icon: FiZap, color: "text-slate-800" },
  logicapps: { name: "Azure Logic Apps", Icon: FiGitBranch, color: "text-slate-800" },
  delta: { name: "Delta Lake", Icon: FiLayers, color: "text-slate-800" },

  // GCP DE
  gcs: { name: "Google Cloud Storage (GCS)", Icon: FiLayers, color: "text-slate-800" },
  dataflow: { name: "Dataflow", Icon: FiTool, color: "text-slate-800" },
  bigquery: { name: "BigQuery", Icon: FiDatabase, color: "text-slate-800" },
  pubsub: { name: "Pub/Sub", Icon: FiActivity, color: "text-slate-800" },

  // extra
  partitioning: { name: "Partitioning", Icon: "none", img: "/images/courses/partitioning.png" },
};

// --- normalize tech keys (NO UI change, only makes icons appear reliably)
const TECH_KEY_ALIASES = {
  SQL: "sql",
  Parquet: "parquet",
  "lambda functions": "lambda",
  "Lambda Functions": "lambda",
  "Step Functions": "stepfunctions",
  "step functions": "stepfunctions",
};

function normalizeTechKey(k) {
  const raw = String(k ?? "").trim();
  if (!raw) return raw;

  if (STACK_TECH[raw]) return raw;
  if (TECH_KEY_ALIASES[raw]) return TECH_KEY_ALIASES[raw];

  const lower = raw.toLowerCase();
  if (STACK_TECH[lower]) return lower;

  const noSpaces = lower.replace(/\s+/g, "");
  if (STACK_TECH[noSpaces]) return noSpaces;

  return raw;
}

// =====================================================================================
// WEB / FULL STACK COURSE STACKS (existing)
// =====================================================================================
const COURSE_STACKS = {
  "java-full-stack-development": {
    frontend: ["html", "css", "js", "react", "bootstrap"],
    backend: ["java", "spring", "springboot", "hibernate"],
    database: ["postgres", "mysql", "mongo"],
    cloud: ["aws", "azure", "gcp"],
    cicd: ["git", "gha", "gitlab", "circleci", "azuredevops", "jenkins"],
  },
  "react-web-development": {
    frontend: ["html", "css", "js", "ts", "react", "bootstrap"],
    backend: ["node"],
    database: ["postgres", "mysql", "mongo"],
    cloud: ["amplify", "netlify", "vercel"],
    cicd: ["git", "gha", "gitlab", "azuredevops", "bitbucket", "jenkins"],
  },
  "nextjs-web-development": {
    frontend: ["html", "css", "js", "ts", "react", "next", "bootstrap"],
    backend: ["node"],
    database: ["postgres", "mysql", "mongo"],
    cloud: ["amplify", "netlify", "vercel"],
    cicd: ["git", "gha", "gitlab", "azuredevops", "bitbucket", "jenkins"],
  },
  "angular-web-development": {
    frontend: ["html", "css", "ts", "angular", "bootstrap"],
    backend: ["node"],
    database: ["postgres", "mysql", "mongo"],
    cloud: ["amplify", "netlify", "vercel"],
    cicd: ["git", "gitlab", "circleci", "azuredevops", "bitbucket", "jenkins"],
  },
};

// =====================================================================================
// ✅ DATA ENGINEERING PACKAGES (icons-based blocks)
// =====================================================================================
const DATA_ENGINEERING_PACKAGES = [
  {
    key: "aws-data-engineering",
    title: "AWS Data Engineering",
    subtitle: "S3 • Glue • Athena • Kinesis • Redshift",
    heroTech: "aws",
    blocks: {
      "Core Skills": ["python", "SQL", "csv", "json", "xml", "Parquet"],
      "Data Lake": ["s3", "redshift", "rds"],
      "Batch ETL": ["glue", "emr", "pyspark", "athena", "lambda functions", "Step Functions"],
      "Streaming and Orchestration": ["kinesis", "kafka", "airflow"],
      "CI/CD": ["terraform", "git", "docker"],
    },
  }, 
  {
    key: "snowflake-data-engineering",
    title: "Snowflake Data Engineering",
    subtitle: "Snowpipe • Snowpark • Streams/Tasks • Marts",
    heroTech: "snowflake",
    blocks: {
      "Core Skills": ["snowflake", "python"],
      "Ingestion": ["snowpipe"],
      "Transform": ["snowpark"],
      "Streaming/Events": ["kafka"],
      "Orchestration": ["airflow"],
      "CI/CD": ["terraform", "git", "docker"],
    },
  },
  {
    key: "azure-data-engineering",
    title: "Azure Data Engineering",
    subtitle: "ADLS • ADF • Databricks (Delta) • Synapse",
    heroTech: "azure",
    blocks: {
      "Core Skills": ["python", "sql", "csv", "json", "xml", "parquet"],
      "Data Lake": ["adls"],
      "Batch ETL": ["adf", "databricks", "pyspark", "delta", "synapse"],
      "Streaming and Orchestration": ["eventhubs", "kafka", "streamanalytics"],
      "Automation": ["functions", "logicapps"],
      "CI/CD": ["terraform", "git", "azuredevops", "docker"],
    },
  },
  {
    key: "gcp-data-engineering",
    title: "GCP Data Engineering",
    subtitle: "GCS • Dataflow • BigQuery • Pub/Sub",
    heroTech: "gcp",
    blocks: {
      "Core Skills": ["python", "sql", "csv", "json", "parquet"],
      "Storage": ["gcs"],
      "Processing": ["dataflow", "bigquery"],
      "Streaming": ["pubsub"],
      "Orchestration": ["airflow"],
      "CI/CD": ["terraform", "docker", "git"],
    },
  },
];

// =====================================================================================
// COURSES DISPLAY (existing top section)
// =====================================================================================
const STACK_COURSES = [
  {
    courseKey: "java-full-stack-development",
    title: "Java Full Stack Development",
    subtitle: "Spring Boot + React + DB + CI/CD",
    heroTech: "springboot",
  },
  {
    courseKey: "react-web-development",
    title: "React Web Development",
    subtitle: "React + TypeScript + Hosting",
    heroTech: "react",
  },
  {
    courseKey: "nextjs-web-development",
    title: "Next.js Web Development",
    subtitle: "Next.js + React + TypeScript + Deployment",
    heroTech: "next",
  },
  {
    courseKey: "angular-web-development",
    title: "Angular Web Development",
    subtitle: "Angular + TypeScript + API + Deployment",
    heroTech: "angular",
  },
];

// =====================================================================================
// UI HELPERS
// =====================================================================================
function StackMark({ techKey, size = 18 }) {
  const key = normalizeTechKey(techKey);
  const t = STACK_TECH[key];
  if (!t) return null;

  const iconIsValid = typeof t.Icon === "function";
  const iconIsNone = t.Icon === "none";

  if (iconIsValid) {
    const I = t.Icon;
    return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
  }

  if ((iconIsNone || !t.Icon) && t.img) {
    return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
      style={{ width: 20, height: size }}
      title={t.name}
    >
      ?
    </span>
  );
}

function TechItem({ techKey }) {
  const key = normalizeTechKey(techKey);
  const t = STACK_TECH[key];

  if (!t) return null;

  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm"
      title={t.name}
    > 
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
        <StackMark techKey={key} size={36} />
      </div>

      <div className="min-w-0">
        <div className="truncate text-[12px] font-semibold text-gray-900">{t.name}</div>
      </div>
    </div>
  );
}

function MiniSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3">
      <div className="mb-2 text-[12px] font-semibold text-gray-800">{title}</div>
      <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))]">
        {items.map((k, idx) => (
          <TechItem key={`${String(k)}-${idx}`} techKey={k} />
        ))}
      </div>
    </div>
  );
}

function CourseHeader({ course }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
            <StackMark techKey={course.heroTech} size={22} />
          </div>

          <div className="min-w-0">
            <div className="text-[15px] font-semibold text-gray-900">{course.title}</div>
            <div className="mt-0.5 text-xs text-gray-600">{course.subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseCardMini({ course }) {
  const stack = COURSE_STACKS[course.courseKey] || {};

  return (
    <Link href={`/training/professional-training/${course.courseKey}`} className="block">
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
        <CourseHeader course={course} />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MiniSection title="Frontend" items={stack.frontend || []} />
          <MiniSection title="Backend" items={stack.backend || []} />
          <MiniSection title="Database" items={stack.database || []} />
          <MiniSection title="Cloud / Hosting" items={stack.cloud || []} />
          <div className="sm:col-span-2">
            <MiniSection title="CI/CD" items={stack.cicd || []} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function DataEngCard({ pkg }) {
  const entries = Object.entries(pkg.blocks || {});

  return (
    <Link href={`/training/professional-training/${pkg.key}`} className="block">
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
        <CourseHeader course={pkg} />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {entries.map(([title, items]) => (
            <div key={title} className="sm:col-span-2">
              <MiniSection title={title} items={items} />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

// =====================================================================================
// PAGE (UI unchanged)
// =====================================================================================
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              {HERO.badge}
              <span className="mx-2 h-3 w-px bg-slate-600" />
              <span className="font-semibold text-emerald-300">Online Training</span>
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {HERO.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
              All professional programs are delivered as{" "}
              <span className="font-semibold text-emerald-300">online classes</span>{" "}
              with project-focused mentor guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-callback"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
              >
                Schedule a counselling call
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Professional training you can choose
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {STACK_COURSES.map((c) => (
                <CourseCardMini key={c.courseKey} course={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA ENGINEERING SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Data Engineering
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Choose your track based on the target platform: AWS, Snowflake, Azure, or GCP.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {DATA_ENGINEERING_PACKAGES.map((pkg) => (
              <DataEngCard key={pkg.key} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
                <p className="text-sm text-gray-700">
                  Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the
                  path.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  <FiPhone className="h-4 w-4" />
                  Request a Callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
