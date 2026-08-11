import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { CALENDAR_URL } from "@/lib/calendar";
import { PACKAGES, formatUsd } from "@/lib/packages";

const PACKAGE_LIST = Object.values(PACKAGES);

const WORK = [
  {
    title: "AI enablement for teams",
    body: "Shared practices, ownership, and a path from first use cases to habits people keep using.",
  },
  {
    title: "Adoption when pilots stall",
    body: "Find what is stuck, pick the few bets that matter, and install a simple operating rhythm.",
  },
  {
    title: "AI-native product work",
    body: "Decide what to build, how to evaluate it, and where agents or models belong in the product.",
  },
];

const TOPICS = [
  "LLM product decisions",
  "Use-case prioritization",
  "Team enablement programs",
  "Agent and workflow design",
  "Evals and quality bars",
  "Security and data boundaries",
  "Internal tools and RAG",
  "Change management for AI",
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ScheduleButton({
  children = "Schedule a call",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <ExternalLink
      href={CALENDAR_URL}
      className={`tap-target inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 ${className}`}
    >
      {children}
    </ExternalLink>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 min-h-14 py-2 flex items-center justify-between gap-3">
          <a
            href="#main"
            className="text-sm font-medium text-ink shrink-0 py-2"
          >
            Eliran Suisa
          </a>
          <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
            <a
              href="#work"
              className="tap-target inline-flex items-center px-2.5 sm:px-3 text-sm text-muted hover:text-ink"
            >
              Work
            </a>
            <a
              href="#packages"
              className="tap-target inline-flex items-center px-2.5 sm:px-3 text-sm text-muted hover:text-ink"
            >
              Packages
            </a>
            <ScheduleButton className="ml-1 !px-3.5">Schedule</ScheduleButton>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1" tabIndex={-1}>
        {/* Hero */}
        <section
          className="mx-auto max-w-3xl px-5 sm:px-6 pt-12 sm:pt-20 pb-14 sm:pb-16"
          aria-labelledby="hero-heading"
        >
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 sm:items-start">
            <Image
              src="/eliran-headshot.jpg"
              alt="Portrait of Eliran Suisa"
              width={96}
              height={96}
              priority
              className="size-24 rounded-full object-cover border border-line shrink-0"
              style={{ objectPosition: "50% 12%" }}
            />
            <div>
              <p className="text-sm text-muted">AI enablement coaching</p>
              <h1
                id="hero-heading"
                className="mt-2 text-balance text-3xl sm:text-4xl font-medium text-ink leading-tight"
              >
                Help your team use AI for real work, not demos.
              </h1>
              <p className="mt-4 text-pretty text-base sm:text-[17px] leading-relaxed text-muted max-w-prose">
                1-on-1 sessions with Eliran Suisa for founders and product/eng
                leaders. Focus: enablement, adoption, and building products
                where AI is part of the core loop.
              </p>
              <div className="mt-7 flex flex-col xs:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <ScheduleButton />
                <a
                  href="#packages"
                  className="tap-target inline-flex items-center justify-center min-h-11 px-4 text-sm text-muted hover:text-ink border border-line rounded-md sm:border-0"
                >
                  Package quotes
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Pick a time. We confirm the package on the call. Payment comes
                after.
              </p>
            </div>
          </div>
        </section>

        {/* Work */}
        <Reveal
          as="section"
          id="work"
          className="border-t border-line bg-surface"
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="work-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink"
            >
              What we work on
            </h2>
            <ul className="mt-8 divide-y divide-line">
              {WORK.map((item) => (
                <li key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-base font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Topics */}
        <Reveal
          as="section"
          className="border-t border-line"
          aria-labelledby="topics-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="topics-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink"
            >
              Topics that come up often
            </h2>
            <p className="mt-3 text-pretty text-[15px] text-muted max-w-prose">
              Not a survey course. We go deep on the decisions your team is
              facing now.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {TOPICS.map((t) => (
                <li
                  key={t}
                  className="text-[15px] text-ink border-b border-line py-3"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* How it works */}
        <Reveal
          as="section"
          className="border-t border-line bg-surface"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="how-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink"
            >
              How it works
            </h2>
            <ol className="mt-8 space-y-5">
              {[
                "Book a call on the calendar.",
                "Share a bit of context: team, stack, what is stuck.",
                "We pick a package depth and outcomes together.",
                "Payment and a session plan come after that.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 text-[15px]">
                  <span
                    className="font-mono text-sm text-muted tabular-nums w-6 shrink-0"
                    aria-hidden="true"
                  >
                    {i + 1}.
                  </span>
                  <span className="text-pretty text-ink leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Packages */}
        <Reveal
          as="section"
          id="packages"
          className="border-t border-line"
          aria-labelledby="packages-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="packages-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink"
            >
              Packages
            </h2>
            <p className="mt-3 text-pretty text-[15px] text-muted max-w-prose">
              Indicative quotes in USD. Final scope is confirmed on the call.
            </p>

            <div className="mt-10 space-y-0 divide-y divide-line border-y border-line">
              {PACKAGE_LIST.map((pkg) => (
                <article
                  key={pkg.id}
                  className="py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
                  aria-labelledby={`pkg-${pkg.id}`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted">{pkg.sessionsLabel}</p>
                    <h3
                      id={`pkg-${pkg.id}`}
                      className="mt-1 text-lg font-medium text-ink"
                    >
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted max-w-md">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0 sm:min-w-[9rem]">
                    <p className="text-2xl font-medium text-ink tabular-nums">
                      <span className="sr-only">Quote </span>
                      {formatUsd(pkg.priceUsd)}
                    </p>
                    <p className="mt-0.5 text-sm text-muted tabular-nums">
                      <span className="sr-only">Was </span>
                      <del>{formatUsd(pkg.originalUsd)}</del>
                    </p>
                    <p className="mt-1 text-xs text-muted">{pkg.discountLabel}</p>
                    <div className="mt-4 sm:flex sm:justify-end">
                      <ScheduleButton>Schedule</ScheduleButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal
          as="section"
          className="border-t border-line bg-surface"
          aria-labelledby="quotes-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="quotes-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink mb-8"
            >
              What people say
            </h2>
            <Testimonials />
          </div>
        </Reveal>

        {/* About */}
        <Reveal
          as="section"
          className="border-t border-line"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
            <h2
              id="about-heading"
              className="text-balance text-xl sm:text-2xl font-medium text-ink"
            >
              About Eliran
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-muted max-w-prose">
              <p>
                Eliran works with founders and product/engineering leaders who
                need AI to move from experiments into daily work. Sessions cover
                enablement, adoption, and product decisions for AI-native
                companies.
              </p>
              <p>
                Expect clear priorities, frameworks you can run without a
                consultant on standby, and next steps you can take the same
                week.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <ScheduleButton>Schedule with Eliran</ScheduleButton>
              <ExternalLink
                href="https://www.linkedin.com/in/eliran-suisa/"
                className="tap-target inline-flex items-center justify-center min-h-11 px-4 text-sm text-muted hover:text-ink border border-line rounded-md"
              >
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted">
          <p>
            <span className="sr-only">Copyright </span>© 2026 Eliran Suisa
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-1 gap-y-1 list-none p-0 m-0">
              <li>
                <ExternalLink
                  href={CALENDAR_URL}
                  className="tap-target inline-flex items-center px-3 py-2 hover:text-ink"
                >
                  Schedule
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://www.linkedin.com/in/eliran-suisa/"
                  className="tap-target inline-flex items-center px-3 py-2 hover:text-ink"
                >
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="tap-target inline-flex items-center px-3 py-2 hover:text-ink"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="tap-target inline-flex items-center px-3 py-2 hover:text-ink"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
