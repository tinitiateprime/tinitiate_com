// import Link from "next/link";
// import path from "path";
// import { readFile } from "fs/promises";
// import { notFound } from "next/navigation";

// const BASE = "/training/professional-training";

// async function loadSyllabus() {
//   try {
//     const filePath = path.join(
//       process.cwd(),
//       "public",
//       "data",
//       "professional-training-syllabus.json"
//     );
//     const raw = await readFile(filePath, "utf8");
//     return JSON.parse(raw);
//   } catch {
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const data = await loadSyllabus();
//   return (data?.courses || []).map((c) => ({
//     slug: c.key, // ✅ must match [slug]
//   }));
// }

// export async function generateMetadata({ params }) {
//   // ✅ Next.js 16: params is Promise
//   const { slug } = await params;

//   const data = await loadSyllabus();
//   const key = decodeURIComponent(slug || "");
//   const course = (data?.courses || []).find((c) => c.key === key);

//   return {
//     title: course ? `${course.title} | TINITIATE` : "Course | TINITIATE",
//     description: course?.subtitle || "Professional Training course details",
//   };
// }

// export default async function Page({ params }) {
//   // ✅ Next.js 16: params is Promise
//   const { slug } = await params;

//   const data = await loadSyllabus();
//   if (!data) return notFound();

//   const key = decodeURIComponent(slug || "");
//   const course = (data.courses || []).find((c) => c.key === key);
//   if (!course) return notFound();

//   return (
//     <main className="bg-white text-gray-900">
//       {/* Header */}
//       <section className="border-b bg-gray-50 px-6 py-10">
//         <div className="mx-auto max-w-5xl">
//           <Link
//             href={BASE}
//             className="text-sm font-semibold text-indigo-600 hover:underline"
//           >
//             ← Back to Professional Training
//           </Link>

//           <div className="mt-4">
//             <div className="inline-flex flex-wrap items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
//               {course.category || "Professional Training"}
//               {course.level ? (
//                 <>
//                   <span className="h-3 w-px bg-gray-200" />
//                   {course.level}
//                 </>
//               ) : null}
//               {course.mode ? (
//                 <>
//                   <span className="h-3 w-px bg-gray-200" />
//                   {course.mode}
//                 </>
//               ) : null}
//             </div>

//             <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
//               {course.title}
//             </h1>

//             {course.subtitle ? (
//               <p className="mt-2 text-sm text-gray-600">{course.subtitle}</p>
//             ) : null}

//             <div className="mt-6 grid gap-3 sm:grid-cols-3">
//               <Stat label="Duration" value={course.duration || "—"} />
//               <Stat label="Projects" value={`${course.projects?.length || 0}+`} />
//               <Stat label="Capstone" value={course.capstone?.title || "Yes"} />
//             </div>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
//               >
//                 Schedule a counselling call
//               </Link>

//               {course.brochure_url ? (
//                 <a
//                   href={course.brochure_url}
//                   className="inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold hover:bg-white"
//                 >
//                   Download brochure
//                 </a>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Body */}
//       <section className="px-6 py-12">
//         <div className="mx-auto grid max-w-5xl gap-10">
//           {/* Overview */}
//           <Card title="Overview">
//             {course.overview ? (
//               <p className="text-sm text-gray-700">{course.overview}</p>
//             ) : (
//               <p className="text-sm text-gray-700">Syllabus will be updated soon.</p>
//             )}

//             {course.prerequisites?.length ? (
//               <>
//                 <h3 className="mt-6 text-sm font-extrabold">Prerequisites</h3>
//                 <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                   {course.prerequisites.map((p) => (
//                     <li key={p}>{p}</li>
//                   ))}
//                 </ul>
//               </>
//             ) : null}

//             {course.outcomes?.length ? (
//               <>
//                 <h3 className="mt-6 text-sm font-extrabold">What you’ll be able to do</h3>
//                 <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                   {course.outcomes.map((o) => (
//                     <li key={o}>{o}</li>
//                   ))}
//                 </ul>
//               </>
//             ) : null}
//           </Card>

//           {/* Modules */}
//           {course.modules?.length ? (
//             <Card title="Detailed Syllabus">
//               <div className="space-y-3">
//                 {course.modules.map((m) => (
//                   <details
//                     key={`${m.module}-${m.title}`}
//                     className="rounded-2xl border bg-white p-4"
//                   >
//                     <summary className="cursor-pointer list-none text-sm font-extrabold">
//                       <span className="mr-2 text-gray-400">{m.module}</span>
//                       {m.title}
//                       <span className="ml-2 text-xs font-semibold text-gray-500">
//                         ({m.topics?.length || 0} topics)
//                       </span>
//                     </summary>

//                     <div className="mt-3 grid gap-4 sm:grid-cols-2">
//                       <div>
//                         <div className="text-xs font-extrabold text-gray-700">Topics</div>
//                         <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                           {(m.topics || []).map((t) => (
//                             <li key={t}>{t}</li>
//                           ))}
//                         </ul>
//                       </div>

//                       {m.labs?.length ? (
//                         <div>
//                           <div className="text-xs font-extrabold text-gray-700">
//                             Hands-on / Labs
//                           </div>
//                           <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                             {m.labs.map((l) => (
//                               <li key={l}>{l}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       ) : null}
//                     </div>
//                   </details>
//                 ))}
//               </div>
//             </Card>
//           ) : null}

//           {/* Projects */}
//           {course.projects?.length ? (
//             <Card title="Projects">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {course.projects.map((p) => (
//                   <div key={p.title} className="rounded-2xl border bg-white p-4">
//                     <div className="text-sm font-extrabold">{p.title}</div>
//                     {p.description ? (
//                       <p className="mt-1 text-sm text-gray-700">{p.description}</p>
//                     ) : null}

//                     {p.deliverables?.length ? (
//                       <>
//                         <div className="mt-3 text-xs font-extrabold text-gray-700">
//                           Deliverables
//                         </div>
//                         <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                           {p.deliverables.map((d) => (
//                             <li key={d}>{d}</li>
//                           ))}
//                         </ul>
//                       </>
//                     ) : null}
//                   </div>
//                 ))}
//               </div>

//               {course.capstone ? (
//                 <div className="mt-6 rounded-2xl border bg-gray-50 p-4">
//                   <div className="text-sm font-extrabold">
//                     Capstone: {course.capstone.title}
//                   </div>
//                   {course.capstone.description ? (
//                     <p className="mt-1 text-sm text-gray-700">
//                       {course.capstone.description}
//                     </p>
//                   ) : null}
//                 </div>
//               ) : null}
//             </Card>
//           ) : null}

//           {/* CTA */}
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <div className="text-lg font-extrabold">Want a personalized study plan?</div>
//                 <div className="mt-1 text-sm text-gray-700">
//                   We’ll map the best path based on your experience + target role.
//                 </div>
//               </div>
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
//               >
//                 Request a Callback
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function Stat({ label, value }) {
//   return (
//     <div className="rounded-2xl border bg-white p-4">
//       <div className="text-xs font-semibold text-gray-500">{label}</div>
//       <div className="mt-1 font-bold">{value}</div>
//     </div>
//   );
// }

// function Card({ title, children }) {
//   return (
//     <div className="rounded-3xl border p-6">
//       <h2 className="text-lg font-extrabold">{title}</h2>
//       <div className="mt-3">{children}</div>
//     </div>
//   );
// }













// src/app/training/professional-training/[slug]/page.js

import Link from "next/link";
import path from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const BASE = "/training/professional-training";

export const dynamic = "force-static";
export const revalidate = 86400; // 24h

async function loadSyllabus() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "courses",
      "professional-training-syllabus.json"
    );
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const data = await loadSyllabus();
  return (data?.courses || []).map((c) => ({
    slug: c.key, // ✅ must match [slug]
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Next.js 16
  const data = await loadSyllabus();
  const key = decodeURIComponent(slug || "");
  const course = (data?.courses || []).find((c) => c.key === key);

  return {
    title: course ? `${course.title} | TINITIATE` : "Course | TINITIATE",
    description: course?.subtitle || "Professional Training course details",
  };
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ Next.js 16

  const data = await loadSyllabus();
  if (!data) return notFound();

  const key = decodeURIComponent(slug || "");
  const course = (data.courses || []).find((c) => c.key === key);
  if (!course) return notFound();

  const hasModules = Array.isArray(course.modules) && course.modules.length > 0;
  const hasProjects = Array.isArray(course.projects) && course.projects.length > 0;

  return (
    <main className="bg-white text-gray-900">
      {/* HERO (premium black like your main page, but cleaner) */}
      <section className="relative overflow-hidden bg-black">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
  
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="primary">{course.category || "Professional Training"}</Pill>
                {course.level ? <Pill tone="muted">{course.level}</Pill> : null}
                {course.mode ? <Pill tone="muted">{course.mode}</Pill> : null}
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              {course.subtitle ? (
                <p className="mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
                  {course.subtitle}
                </p>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600"
                >
                  Schedule a counselling call
                  <FiArrowRight className="h-4 w-4" />
                </Link>

                {course.brochure_url ? (
                  <a
                    href={course.brochure_url}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/15"
                  >
                    Download brochure
                  </a>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <HeroAnchor href="#overview">Overview</HeroAnchor>
                {hasModules ? <HeroAnchor href="#syllabus">Syllabus</HeroAnchor> : null}
                {hasProjects ? <HeroAnchor href="#projects">Projects</HeroAnchor> : null}
              </div>
            </div>

            {/* Right hero panel (no ugly borders, soft glass) */}
            <div className="rounded-3xl bg-white/10 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md ring-1 ring-white/10">
              <div className="text-xs font-semibold text-white/70">Quick facts</div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <MiniStat label="Duration" value={course.duration || "—"} />
                <MiniStat label="Projects" value={`${course.projects?.length || 0}+`} />
                <MiniStat label="Capstone" value={course.capstone?.title || "Yes"} />
              </div>

              <div className="mt-4 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white/80">Includes</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                    Mentor-led sessions + labs
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                    Real-time project guidance
                  </li>
                  <li className="flex gap-2">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                    Interview prep roadmap
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY (same as your theme: gray section + airy cards) */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            {/* LEFT */}
            <div className="space-y-8">
              <Card id="overview" title="Overview" subtitle="About this program">
                {course.overview ? (
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {course.overview}
                  </p>
                ) : (
                  <p className="text-sm text-gray-700">Syllabus will be updated soon.</p>
                )}

                {course.prerequisites?.length ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-extrabold text-gray-900">
                      Prerequisites
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {course.prerequisites.map((p) => (
                        <ListChip key={p}>{p}</ListChip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {course.outcomes?.length ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-extrabold text-gray-900">
                      What you’ll be able to do
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.outcomes.map((o) => (
                        <li key={o} className="flex gap-2 text-sm text-gray-700">
                          <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>

              {hasModules ? (
                <Card
                  id="syllabus"
                  title="Detailed Syllabus"
                  subtitle="Module-by-module breakdown"
                >
                  <div className="space-y-3">
                    {course.modules.map((m) => (
                      <details
                        key={`${m.module}-${m.title}`}
                        className="group rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
                                {m.module}
                              </span>
                              <span className="truncate text-sm font-extrabold text-gray-900">
                                {m.title}
                              </span>
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              {m.topics?.length || 0} topics
                              {m.labs?.length ? ` • ${m.labs.length} labs` : ""}
                            </div>
                          </div>

                          <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 group-open:bg-gray-200">
                            View
                          </span>
                        </summary>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          <SoftBox title="Topics">
                            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                              {(m.topics || []).map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </SoftBox>

                          {m.labs?.length ? (
                            <SoftBox title="Hands-on / Labs">
                              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                                {m.labs.map((l) => (
                                  <li key={l}>{l}</li>
                                ))}
                              </ul>
                            </SoftBox>
                          ) : null}
                        </div>
                      </details>
                    ))}
                  </div>
                </Card>
              ) : null}

              {hasProjects ? (
                <Card id="projects" title="Projects" subtitle="Portfolio-ready work">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {course.projects.map((p) => (
                      <div
                        key={p.title}
                        className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                      >
                        <div className="text-sm font-extrabold text-gray-900">
                          {p.title}
                        </div>
                        {p.description ? (
                          <p className="mt-2 text-sm text-gray-700">{p.description}</p>
                        ) : null}

                        {p.deliverables?.length ? (
                          <>
                            <div className="mt-4 text-xs font-extrabold text-gray-700">
                              Deliverables
                            </div>
                            <ul className="mt-2 space-y-2">
                              {p.deliverables.map((d) => (
                                <li key={d} className="flex gap-2 text-sm text-gray-700">
                                  <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {course.capstone ? (
                    <div className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-white p-5 shadow-sm ring-1 ring-black/5">
                      <div className="text-sm font-extrabold text-gray-900">
                        Capstone: {course.capstone.title}
                      </div>
                      {course.capstone.description ? (
                        <p className="mt-2 text-sm text-gray-700">
                          {course.capstone.description}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </Card>
              ) : null}
            </div>

            {/* RIGHT (sticky CTA, clean) */}
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="text-xs font-semibold text-gray-500">Next step</div>
                <div className="mt-2 text-lg font-extrabold text-gray-900">
                  Want a personalized study plan?
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Tell us your goal—career switch, upskilling, or interview prep—and we’ll map the best track.
                </p>

                <div className="mt-5 grid gap-3">
                  <Link
                    href="/request-callback"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Request a Callback
                    <FiArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={BASE}
                    className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200"
                  >
                    Explore other courses
                  </Link>
                </div>

                <div className="mt-5 rounded-2xl bg-gray-50 p-4 ring-1 ring-black/5">
                  <div className="text-xs font-extrabold text-gray-700">Includes</div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                      Assignments + hands-on labs
                    </li>
                    <li className="flex gap-2">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                      Real-time project guidance
                    </li>
                    <li className="flex gap-2">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                      Interview preparation roadmap
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- UI Bits (soft, borderless look) -------------------- */

function Pill({ children, tone = "muted" }) {
  const cls =
    tone === "primary"
      ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/25"
      : "bg-white/10 text-white/80 ring-1 ring-white/10";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
      {children}
    </span>
  );
}

function HeroAnchor({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/15 ring-1 ring-white/10"
    >
      {children}
    </a>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
      <div className="text-xs font-semibold text-white/65">{label}</div>
      <div className="mt-1 text-sm font-extrabold text-white">{value}</div>
    </div>
  );
}

function Card({ id, title, subtitle, children }) {
  return (
    <section id={id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      {subtitle ? (
        <div className="text-xs font-semibold text-gray-500">{subtitle}</div>
      ) : null}
      <h2 className="mt-1 text-lg font-extrabold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ListChip({ children }) {
  return (
    <div className="flex items-start gap-2 rounded-2xl bg-gray-50 p-3 ring-1 ring-black/5">
      <FiCheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
}

function SoftBox({ title, children }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4 ring-1 ring-black/5">
      <div className="text-xs font-extrabold text-gray-700">{title}</div>
      {children}
    </div>
  );
}
