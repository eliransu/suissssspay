import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms · Eliran Suisa",
  description: "Terms for eliran.me coaching site.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <p className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="text-balance text-3xl font-medium text-ink">Terms</h1>
      <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-muted max-w-prose">
        <p>
          Package prices on this site are indicative quotes, not a binding
          offer. Scope, schedule, and payment are confirmed after you book a
          call with Eliran Suisa.
        </p>
        <p>
          Coaching is professional advice in a consulting capacity. It is not
          legal, tax, or regulated financial advice.
        </p>
        <p>
          By scheduling a session you agree to show up on time or cancel with
          reasonable notice (at least 24 hours when possible).
        </p>
        <p>
          Questions: contact via{" "}
          <a
            href="https://www.linkedin.com/in/eliran-suisa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-2"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </div>
    </main>
  );
}
