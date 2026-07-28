import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Contact Us | TINITIATE",
  description:
    "Contact TINITIATE for enterprise technology services, AI automation, cloud, data engineering, and small business solutions.",
};

const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=contact%40tinitiate.com&su=TINITIATE%20Website%20Enquiry";

export default function ContactPage() {
  return (
    <main className="text-slate-700">
      <section className="bg-black px-6 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Let&apos;s talk about what you are building.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg md:mx-0">
              Reach TINITIATE for Enterprise Services - cloud, data engineering,
              and agentic AI - or Solo Entrepreneur &amp; Small Business Services -
              workflows, AI workers, sales, and customer tools.
            </p>
            <Link
              href="/request-callback"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              Book a Free Call
            </Link>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 shadow-lg md:h-[22rem] md:aspect-auto">
            <Image
              src="/images/banners/contact-digital.png"
              alt="Digital contact form with email and phone communication icons"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-slate-50 px-6 py-14 sm:py-16 lg:py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(203 213 225 / 55%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">Contact Us</h2>

            <div className="mt-5 space-y-4 leading-6">
              <p>
                <span className="font-semibold text-slate-600">Email:</span>{" "}
                <a
                  href={emailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  contact@tinitiate.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-600">USA:</span>{" "}
                <a
                  href="tel:+19736536870"
                  className="font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  +1 (973) 653-6870
                </a>
                <span className="text-slate-400">, </span>
                <a
                  href="tel:+12068024102"
                  className="font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  +1 (206) 802-4102
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-600">India:</span>{" "}
                <a
                  href="tel:+919553495553"
                  className="font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  +91 95534 95553
                </a>
              </p>
            </div>

            <p className="mt-7 max-w-lg leading-6 text-slate-600">
              For new projects, include your business goal, current systems,
              timeline, and the kind of support you need.
            </p>

            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Email TINITIATE
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="border-b border-slate-200 pb-5 text-2xl font-bold text-slate-950">
              Offices
            </h2>

            <address className="py-5 not-italic">
              <h3 className="font-bold text-slate-600">Head Office</h3>
              <p className="mt-1 leading-6">
                1420 Valley Trl,
                <br />
                Irving, TX 75063, USA
              </p>
            </address>

            <address className="border-t border-slate-200 pt-5 not-italic">
              <h3 className="font-bold text-slate-600">Corporate Office</h3>
              <p className="mt-1 max-w-lg leading-6">
                1-2/10 Sbh Colony Mohan Nagar, SBH Colony,
                <br />
                Kothapet, 500036, Telangana, India
              </p>
            </address>
          </article>
        </div>
      </section>
    </main>
  );
}
