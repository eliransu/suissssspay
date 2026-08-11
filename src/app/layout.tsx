import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliran Suisa · AI enablement coaching",
  description:
    "1-on-1 coaching for teams that need AI to stick: enablement, adoption, and building AI-native products. Schedule a call with Eliran Suisa.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
