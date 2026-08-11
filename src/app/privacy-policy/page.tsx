import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy · Eliran Suisa",
  description: "Privacy policy for eliran.me coaching site.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
      <p className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="text-balance text-3xl font-medium text-ink">Privacy</h1>
      <div className="mt-6 space-y-4 text-pretty text-[15px] leading-relaxed text-muted max-w-prose">
        <p>
          This site is a personal coaching page for Eliran Suisa. It does not
          run a user account system or store form data on this domain.
        </p>
        <p>
          When you schedule a call, you use Google Calendar. That booking is
          subject to{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-2"
          >
            Google&apos;s privacy policy
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
        <p>
          Hosting may process standard server logs (IP, user agent, request
          path) for security and reliability.
        </p>
        <p>
          Questions: contact Eliran via{" "}
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
