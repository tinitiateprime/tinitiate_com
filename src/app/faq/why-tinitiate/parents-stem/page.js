/it / // File: src/app/parents-faq/page.jsx
// // JSON-driven Parent FAQ page. All content comes from /public/data/faq/parentsFaqStem.json

// import Link from "next/link";
// import Script from "next/script";
// import faqData from "../../../../../public/data/faq/parentsFaqStem.json";

// export const metadata = {
//   title: "Parent FAQ — TINITIATE STEM & IT Programs",
//   description:
//     "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
//   openGraph: {
//     title: "Parent FAQ — TINITIATE STEM & IT Programs",
//     description:
//       "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
//     url: "https://www.tinitiate.com/parents-faq",
//     siteName: "TINITIATE",
//     type: "article",
//   },
// };

// // Helpers
// function pad2(n) {
//   return n.toString().padStart(2, "0");
// }

// function renderBlock(block, idx) {
//   switch (block.type) {
//     case "p":
//       return (
//         <p key={`p-${idx}`} className="text-gray-700">
//           {block.text}
//         </p>
//       );
//     case "ul":
//       return (
//         <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-5 text-gray-700">
//           {block.items?.map((it, i) => (
//             <li key={`li-${idx}-${i}`}>{it}</li>
//           ))}
//         </ul>
//       );
//     case "table":
//       return (
//         <div key={`tbl-${idx}`} className="overflow-x-auto">
//           <table className="w-full text-left text-sm md:text-base border border-gray-200 rounded-xl overflow-hidden">
//             {block.headers?.length ? (
//               <thead>
//                 <tr className="border-b border-gray-200 bg-gray-100 text-gray-800">
//                   {block.headers.map((h, hIdx) => (
//                     <th key={`th-${hIdx}`} className="p-3">
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//             ) : null}
//             <tbody className="divide-y divide-gray-200">
//               {block.rows?.map((row, rIdx) => (
//                 <tr key={`tr-${rIdx}`}>
//                   {row.map((cell, cIdx) => (
//                     <td key={`td-${rIdx}-${cIdx}`} className="p-3">
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     default:
//       return null;
//   }
// }

// function flattenBlocksToText(blocks) {
//   const parts = [];
//   for (const b of blocks) {
//     if (b.type === "p") parts.push(b.text);
//     if (b.type === "ul") parts.push(b.items?.join("; "));
//     if (b.type === "table") {
//       if (b.rows?.length) {
//         const header = b.headers || [];
//         parts.push(
//           b.rows
//             .map((row) =>
//               row
//                 .map((cell, i) => (header[i] ? `${header[i]}: ${cell}` : cell))
//                 .join(" | ")
//             )
//             .join("; ")
//         );
//       }
//     }
//   }
//   return parts.join(" ");
// }

// export default function ParentFAQPage() {
//   const { updatedAt, faqs } = faqData;

//   const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
//     "en-IN",
//     { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
//   );

//   const faqLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((f) => ({
//       "@type": "Question",
//       name: f.title,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: flattenBlocksToText(f.blocks),
//       },
//     })),
//   };

//   return (
//     <main className="min-h-screen bg-white text-gray-900 pt-10 md:pt-14">
//       {/* ======= Hero ======= */}
//       <section className="mx-auto w-[92%] max-w-[1200px] pb-4">
//         <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-8 md:p-10">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
//             Parents whose kids are taking STEM Course
//           </p>
//           <h1 className="text-2xl font-extrabold leading-tight md:text-4xl">
//             Parent FAQ — TINITIATE STEM & IT Career Programs
//           </h1>
//           <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
//             Straight answers about our online programs, structure, technologies, and
//             how we turn classroom learning into job-ready skills.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
//             >
//               Talk to a Mentor
//             </Link>
//             <Link
//               href="/work-experience-program"
//               className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
//             >
//               View Work Experience Program
//             </Link>
//           </div>
//           <p className="mt-4 text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p>
//         </div>
//       </section>

//       {/* ======= Body with sticky ToC ======= */}
//       <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12">
//         {/* ToC */}
//         <aside className="sticky top-24 md:top-28 hidden h-fit md:col-span-3 md:block">
//           <nav className="rounded-2xl border border-gray-200 p-4">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
//               On this page
//             </p>
//             <ul className="text-sm border border-gray-200 rounded-xl overflow-hidden">
//               {faqs.map((f, i) => (
//                 <li key={`toc-${f.id}`} className={i ? "border-t" : ""}>
//                   <a
//                     className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700"
//                     href={`#${f.id}`}
//                   >
//                     {`${f.title}`}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* FAQ Content */}
//         <section className="md:col-span-9 space-y-1">
//           {faqs.map((f, i) => (
//             <details
//               id={f.id}
//               key={f.id}
//               className="group rounded-2xl p-5 open:bg-gray-50 scroll-mt-24 md:scroll-mt-28"
//               open
//             >
//               <summary className="flex cursor-pointer list-none items-center justify-between">
//                 <h2 className="text-lg font-bold md:text-xl">
//                   {`${f.title}`}
//                 </h2>
//                 <span className="ml-4 text-xs text-gray-500 group-open:hidden">
//                   Expand
//                 </span>
//                 <span className="ml-4 text-xs text-gray-500 hidden group-open:inline">
//                   Collapse
//                 </span>
//               </summary>

//               <div className="mt-4 space-y-4">
//                 {f.blocks.map((b, idx) => renderBlock(b, idx))}
//               </div>
//             </details>
//           ))}

//           {/* CTA */}
//           <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
//             <h3 className="text-lg font-bold md:text-xl">Still have questions?</h3>
//             <p className="mt-2 text-sm text-gray-700 md:text-base">
//               We’re happy to talk through your child’s goals and help choose the
//               right learning path.
//             </p>
//             <div className="mt-4 flex flex-wrap gap-3">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="/training"
//                 className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
//               >
//                 Explore Training Tracks
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* ======= Structured Data (SEO) ======= */}
//       <Script
//         id="faq-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
//       />
//     </main>
//   );
// }











// // File: src/app/parents-faq/page.jsx
// import Link from "next/link";
// import Script from "next/script";
// import faqData from "../../../../../public/data/faq/parentsFaqStem.json";
// import FAQList from "./FAQList";

// export const metadata = {
//   title: "Parent FAQ — TINITIATE STEM & IT Programs",
//   description:
//     "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
//   openGraph: {
//     title: "Parent FAQ — TINITIATE STEM & IT Programs",
//     description:
//       "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
//     url: "https://www.tinitiate.com/parents-faq",
//     siteName: "TINITIATE",
//     type: "article",
//   },
// };

// function flattenBlocksToText(blocks) {
//   const parts = [];
//   for (const b of blocks) {
//     if (b.type === "p") parts.push(b.text);
//     if (b.type === "ul") parts.push(b.items?.join("; "));
//     if (b.type === "table" && b.rows?.length) {
//       const header = b.headers || [];
//       parts.push(
//         b.rows
//           .map((row) =>
//             row.map((cell, i) => (header[i] ? `${header[i]}: ${cell}` : cell)).join(" | ")
//           )
//           .join("; ")
//       );
//     }
//   }
//   return parts.join(" ");
// }

// export default function ParentFAQPage() {
//   const { updatedAt, faqs } = faqData;

//   const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
//     "en-IN",
//     { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
//   );

//   const faqLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((f) => ({
//       "@type": "Question",
//       name: f.title,
//       acceptedAnswer: { "@type": "Answer", text: flattenBlocksToText(f.blocks) },
//     })),
//   };

//   const pad2 = (n) => n.toString().padStart(2, "0");

//   return (
//     <main className="min-h-screen bg-white text-gray-900 pt-14 md:pt-12">
//       {/* Hero */}
//       <section className="mx-auto w-[92%] max-w-[1200px] pb-4">
//         <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-8 md:p-10">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
//             Parents whose kids are taking STEM Course
//           </p>
//           <h1 className="text-2xl font-extrabold leading-tight md:text-4xl">
//             Parent FAQ — TINITIATE STEM & IT Career Programs
//           </h1>
//           <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
//             Straight answers about our online programs, structure, technologies, and
//             how we turn classroom learning into job-ready skills.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
//             >
//               Talk to a Mentor
//             </Link>
//             <Link
//               href="/work-experience-program"
//               className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
//             >
//               View Work Experience Program
//             </Link>
//           </div>
//           <p className="mt-4 text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p>
//         </div>
//       </section>

//       {/* Layout */}
//       <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12">
//         {/* ToC (anchors still work; items open when user clicks question headers) */}
//         <aside className="sticky top-24 md:top-28 hidden h-fit md:col-span-3 md:block">
//           <nav className="rounded-2xl border border-gray-200 p-4">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
//               On this page
//             </p>
//             <ul className="text-sm border border-gray-200 rounded-xl overflow-hidden">
//               {faqs.map((f, i) => (
//                 <li key={`toc-${f.id}`} className={i ? "border-t" : ""}>
//                   <a className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700" href={`#${f.id}`}>
//                     {`${f.title}`}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Controlled FAQ list */}
//         <FAQList faqs={faqs} />
//       </div>

//       {/* JSON-LD */}
//       <Script
//         id="faq-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
//       />
//     </main>
//   );
// }








// File: src/app/parents-faq/page.jsx
import Link from "next/link";
import Script from "next/script";
import faqData from "../../../../../public/data/faq/parentsFaqStem.json";
import FAQList from "./FAQList";

export const metadata = {
  title: "Parent FAQ — TINITIATE STEM & IT Programs",
  description:
    "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
  openGraph: {
    title: "Parent FAQ — TINITIATE STEM & IT Programs",
    description:
      "Answers for parents about TINITIATE's STEM & IT career programs: structure, duration, delivery, technologies, and why it helps bridge college-to-career.",
    url: "https://www.tinitiate.com/parents-faq",
    siteName: "TINITIATE",
    type: "article",
  },
};

// Hardened helper
function flattenBlocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const parts = [];
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;

    if (b.type === "p" && typeof b.text === "string") parts.push(b.text);

    if (b.type === "ul" && Array.isArray(b.items)) {
      parts.push(b.items.filter((x) => typeof x === "string").join("; "));
    }

    if (b.type === "table" && Array.isArray(b.rows)) {
      const header = Array.isArray(b.headers) ? b.headers : [];
      const rows = b.rows;
      parts.push(
        rows
          .map((row) =>
            Array.isArray(row)
              ? row
                  .map((cell, i) =>
                    header[i] ? `${header[i]}: ${cell}` : String(cell ?? "")
                  )
                  .join(" | ")
              : ""
          )
          .join("; ")
      );
    }
  }
  return parts.join(" ");
}

export default function ParentFAQPage() {
  const { updatedAt, faqs } = faqData;

  // ✅ Normalize data so blocks is ALWAYS an array
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalizedFaqs.map((f) => ({
      "@type": "Question",
      name: f.title,
      acceptedAnswer: { "@type": "Answer", text: flattenBlocksToText(f.blocks) },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-14 md:pt-12">
      {/* Hero */}
      <section className="mx-auto w-[92%] max-w-[1200px] pb-4">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-8 md:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
            Parents whose kids are taking STEM Course
          </p>
          <h1 className="text-2xl font-extrabold leading-tight md:text-4xl">
            Parent FAQ — TINITIATE STEM & IT Career Programs
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Straight answers about our online programs, structure, technologies, and
            how we turn classroom learning into job-ready skills.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Talk to a Mentor
            </Link>
            <Link
              href="/work-experience-program"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              View Work Experience Program
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p>
        </div>
      </section>

      {/* Layout */}
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12">
        {/* ToC */}
        <aside className="sticky top-10 md:top-16 hidden h-fit md:col-span-3 md:block">
          <nav className="rounded-2xl border border-gray-200 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              On this page
            </p>
            <ul className="text-sm border border-gray-200 rounded-xl overflow-hidden">
              {normalizedFaqs.map((f, i) => (
                <li key={`toc-${f.id}`} className={i ? "border-t" : ""}>
                  <a
                    className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700"
                    href={`#${f.id}`}
                  >
                    {f.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Controlled FAQ list */}
      {/* <FAQList faqs={normalizedFaqs} defaultDesktopIndex={2} /> */}
      
       <FAQList faqs={normalizedFaqs} openAll />

      </div>

      {/* JSON-LD */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
